import {groq} from 'next-sanity'

export const PROGRAMS_QUERY = groq`
  *[_type == "program"] | order(judul asc) {
    _id,
    judul,
    deskripsi,
    slug,
    gambar {
      asset-> {
        _id,
        url
      }
    }
  }
`

export const PROGRAM_BY_SLUG_QUERY = groq`
  *[_type == "program" && slug.current == $slug][0] {
    _id,
    judul,
    deskripsi,
    slug,
    gambar {
      asset-> {
        _id,
        url
      }
    },
    galeri[] {
      asset-> {
        _id,
        url
      }
    }
  }
`

export const EVENTS_QUERY = groq`
  *[_type == "event"] | order(tanggal desc) {
    _id,
    namaEvent,
    tanggal,
    lokasi,
    deskripsi,
    slug,
    gambar {
      asset-> {
        _id,
        url
      }
    }
  }
`

export const EVENT_BY_SLUG_QUERY = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    namaEvent,
    tanggal,
    lokasi,
    deskripsi,
    slug,
    gambar {
      asset-> {
        _id,
        url
      }
    },
    kegiatan[] {
      _key,
      judulKegiatan,
      deskripsiSingkat,
      linkKegiatan,
      gambar {
        asset-> {
          _id,
          url
        }
      }
    }
  }
`
