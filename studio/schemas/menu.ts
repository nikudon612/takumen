import {defineType} from 'sanity'

export default defineType({
  name: 'menuPage',
  title: 'Menu Page',
  type: 'document',
  fields: [
    // {
    //   name: 'title',
    //   title: 'Section Title',
    //   type: 'string',
    //   validation: (Rule) => Rule.required(),
    // },
    {
      name: 'images',
      title: 'Section Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'name',
              title: 'Menu Image Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'uploadedAt',
              title: 'Date Uploaded',
              type: 'datetime',
            },
          ],
        },
      ],
    },
    {
      name: 'takeoutMenu',
      title: 'Takeout Menu PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      // validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Page',
      }
    },
  },
})
