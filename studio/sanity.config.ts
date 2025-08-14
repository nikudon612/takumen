import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'sanity-template-sveltekit-clean',
  title: 'Clean SvelteKit + Sanity app',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton pages
            S.listItem()
              .title('Navigation')
              .child(S.editor().id('navigation').schemaType('navigation').documentId('navigation')),
            S.listItem()
              .title('Homepage')
              .child(S.editor().id('home').schemaType('home').documentId('home')),
            S.listItem()
              .title('Menu Page')
              .child(S.editor().id('menuPage').schemaType('menuPage').documentId('menuPage')),
            S.listItem()
              .title('Footer')
              .child(S.editor().id('footer').schemaType('footer').documentId('footer')),
            S.listItem()
              .title('Taku Parlor Page')
              .child(S.document().schemaType('takuParlorPage').documentId('takuParlorPage')),

            // Everything else (collections)
            ...S.documentTypeListItems().filter(
              (item) => !['navigation', 'home', 'menuPage', 'footer', 'takuParlorPage'].includes(item.getId()),
            ),
          ]),
    }),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:5173',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
