import {defineField, defineType} from 'sanity'

export const programType = defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({
      name: 'judul',
      title: 'Judul',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gambar',
      title: 'Gambar',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'deskripsi',
      title: 'Deskripsi',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'judul',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'judul',
      subtitle: 'deskripsi',
      media: 'gambar',
    },
  },
})
