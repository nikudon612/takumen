import {defineType, defineField} from 'sanity';

const imageWithMeta = {
  type: 'image',
  options: { hotspot: true },
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
    defineField({
      name: 'credit',
      title: 'Photo Credit',
      type: 'string',
    }),
  ],
};

export default defineType({
  name: 'takuParlorPage',
  title: 'Taku Parlor Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImages',
      title: 'Image Slideshow',
      type: 'array',
      of: [imageWithMeta],
      description: 'Images for the right column slideshow/gallery.',
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'introHeading',
      title: 'Intro Heading',
      type: 'string',
      initialValue: 'TAKU PARLOR',
    }),

    defineField({
      name: 'introBody',
      title: 'Intro Body',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'printMenu',
      title: 'Printable Menu (PDF)',
      type: 'file',
      options: { accept: 'application/pdf' },
    }),
  ],

  preview: {
    select: { title: 'introHeading', media: 'heroImages.0' },
    prepare({ title, media }) {
      return { title: title || 'Taku Parlor Page', media };
    },
  },
});
