export type SanitySlug = {
  current: string;
};

export type SanityImage = {
  asset?: {
    _id: string;
    url: string;
  };
};

export type Program = {
  _id: string;
  judul: string;
  deskripsi: string;
  slug?: SanitySlug;
  gambar?: SanityImage;
};

export type EventSummary = {
  _id: string;
  namaEvent: string;
  tanggal: string;
  lokasi: string;
  deskripsi: string;
  slug?: SanitySlug;
};

export type EventActivity = {
  _key: string;
  judulKegiatan: string;
  gambar?: SanityImage;
  deskripsiSingkat: string;
};

export type EventDetail = EventSummary & {
  kegiatan?: EventActivity[];
};
