// schemas/footer.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'locationLabel',
      title: 'Location Label',
      type: 'string',
      description: 'Example: "Ridgewood Location"'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      description: 'Physical address of the restaurant'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer'
      }
    }
  }
})
