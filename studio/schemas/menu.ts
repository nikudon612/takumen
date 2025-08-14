import {defineType, defineField} from 'sanity'

const imageWithMeta = {
  type: 'image',
  options: {hotspot: true},
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'uploadedAt',
      title: 'Date Uploaded',
      type: 'datetime',
    }),
  ],
}

export default defineType({
  name: 'menuPage',
  title: 'Menu Page',
  type: 'document',
  fields: [
    defineField({
      name: 'orderImages',
      title: 'Order — Images',
      type: 'array',
      of: [imageWithMeta],
    }),
    defineField({
      name: 'dinnerImages',
      title: 'Dinner — Images',
      type: 'array',
      of: [imageWithMeta],
    }),
    defineField({
      name: 'lunchImages',
      title: 'Lunch — Images',
      type: 'array',
      of: [imageWithMeta],
    }),
    defineField({
      name: 'drinkImages',
      title: 'Drink — Images',
      type: 'array',
      of: [imageWithMeta],
    }),
    defineField({
      name: 'takeoutMenu',
      title: 'Takeout Menu PDF',
      type: 'file',
      options: {accept: 'application/pdf'},
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Menu Page'}
    },
  },
})
