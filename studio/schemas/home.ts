// schemas/home.ts
import { defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'slideshowImages',
      title: 'Slideshow Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            { name: 'alt', type: 'string', title: 'Alt text' },
            { name: 'caption', type: 'string', title: 'Caption', options: { isHighlighted: true } }
          ]
        }
      ]
    },
    {
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
    }
  ]
});
