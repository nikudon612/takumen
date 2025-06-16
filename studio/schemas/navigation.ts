// schemas/navigation.ts
import {defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'links',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navLink',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'href',
              title: 'Internal Path',
              type: 'string',
              description: 'Example: "/", "/menu", "/about"',
              validation: (Rule) =>
                Rule.regex(/^\/[a-zA-Z0-9-_\/]*$/, {
                  name: 'internal path',
                  invert: false,
                }).error('Must start with "/" and contain only URL-safe characters'),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Navigation',
      }
    },
  },
})
