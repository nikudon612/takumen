// /schemas/exhibition.ts (or .js)
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Exhibition Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g. TAKUMEN NEW YORK PRESENTS EXHIBITION VOL.21',
    }),

    defineField({
      name: 'exhibitionNumber',
      title: 'Exhibition #',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1),
      description: 'Use the numeric volume (e.g. 21).',
    }),

    defineField({
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g. Sloppy Monsta',
    }),

    defineField({
      name: 'startDate',
      title: 'Starting Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        calendarTodayLabel: 'Today',
      },
      description: 'Date the exhibition starts (used in copy + ordering).',
    }),

    defineField({
      name: 'endDate',
      title: 'End Date (optional)',
      type: 'date',
      options: {
        calendarTodayLabel: 'Today',
      },
      description: 'If applicable. Leave empty for “ongoing” shows.',
    }),

    defineField({
      name: 'isCurrent',
      title: 'Current Exhibition',
      type: 'boolean',
      initialValue: false,
      description: 'Toggle on for the current show so the frontend can highlight it.',
    }),

    defineField({
      name: 'heroImage',
      title: 'Exhibition Image / Flyer',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Accessibility description, e.g. “Sloppy Monsta exhibition flyer”.',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Exhibition Description',
      type: 'array',
      of: [{type: 'block'}],
      description:
        'Main body text describing the exhibition. This maps to the long copy on the page.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'instagram',
      title: 'Instagram Handle / URL',
      type: 'string',
      description: 'e.g. @sloppymonsta or full URL. Frontend can normalize to link.',
    }),

    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
      description: 'e.g. https://sloppymonsta.bigcartel.com',
    }),

    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'info@takumenlic.com',
      description: 'Email for artwork inquiries. Defaults to INFO@TAKUMENLIC.COM.',
      validation: (Rule) => Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).warning('Not a valid email.'),
    }),

    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Use this to manually control ordering (lower = earlier/higher priority).',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'artistName',
      media: 'heroImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Untitled Exhibition',
        subtitle: subtitle ? `By ${subtitle}` : 'Artist not set',
        media,
      }
    },
  },
})
