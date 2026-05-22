import {defineArrayMember, defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'namaEvent',
      title: 'Nama Event',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tanggal',
      title: 'Tanggal',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lokasi',
      title: 'Lokasi',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gambar',
      title: 'Gambar Event',
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
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'namaEvent',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'kegiatan',
      title: 'Kegiatan Dalam Event',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'kegiatanItem',
          title: 'Kegiatan',
          type: 'object',
          fields: [
            defineField({
              name: 'judulKegiatan',
              title: 'Judul Kegiatan',
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
              name: 'deskripsiSingkat',
              title: 'Deskripsi Singkat',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'linkKegiatan',
              title: 'Link Kegiatan',
              type: 'url',
              description: 'Opsional. Isi dengan link dokumentasi seperti YouTube, Instagram, atau platform lain.',
              validation: (rule) =>
                rule.uri({
                  scheme: ['http', 'https'],
                  allowRelative: false,
                }),
            }),
          ],
          preview: {
            select: {
              title: 'judulKegiatan',
              subtitle: 'deskripsiSingkat',
              media: 'gambar',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'namaEvent',
      subtitle: 'tanggal',
      media: 'gambar',
    },
  },
})
