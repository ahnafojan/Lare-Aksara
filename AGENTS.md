# AGENTS.md — Lareaksara

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Sanity v3
- **Language**: TypeScript
- **Font**: Courier New (heading/label), system sans-serif (body)
- **Deploy**: Vercel (frontend) + Sanity Cloud (CMS)

---

## Design System — Soft Brutalism

Gaya desain adalah **Soft Brutalism** dengan kombinasi warna tosca dan putih.
Bukan neo brutalism penuh (terlalu keras), tapi tetap berkarakter.

### Prinsip utama
- Border: `1.5–2px solid #04342C` (bukan 3px)
- Border radius: `6–10px` (sedikit rounded, tidak kotak penuh)
- Box shadow: `2px 2px 0 #04342C` atau `2px 2px 0 #9FE1CB` (kecil, offset)
- Heading: font monospace (`font-family: 'Courier New', monospace`)
- Body text: sans-serif biasa (readable, tidak monospace)
- Spacing: longgar, ada breathing room antar elemen
- Warna solid, tidak ada gradient

### Palet warna
| Token         | Hex       | Kegunaan                        |
|---------------|-----------|---------------------------------|
| Tosca gelap   | `#04342C` | Border, teks heading, shadow    |
| Tosca utama   | `#1D9E75` | Primary button, aksen, nav bg   |
| Tosca medium  | `#5DCAA5` | Card background, ilustrasi      |
| Tosca muda    | `#9FE1CB` | Shadow warna, hover state       |
| Tosca pucat   | `#E1F5EE` | Section background, badge       |
| Putih         | `#FFFFFF` | Background utama, card          |
| Abu muted     | `#5F5E5A` | Body text sekunder              |

### Komponen UI
```
Button primary  → bg #1D9E75, border 1.5px #04342C, radius 8px, shadow 2px 2px 0 #04342C
Button outline  → bg white, border 1.5px #04342C, radius 8px, text #04342C
Badge/pill      → bg #E1F5EE, border 1.5px #1D9E75, radius 20px, text #0F6E56
Card            → bg white, border 1.5px #04342C, radius 8px, shadow 2px 2px 0 #04342C
Section alt     → bg #E1F5EE
Heading font    → 'Courier New', monospace, font-weight 900
Body font       → system-ui, sans-serif
```

### Elemen buku
Setiap section boleh ada ilustrasi SVG berbentuk buku (terbuka, tersusun, rak buku).
Warna ilustrasi mengikuti palet tosca. Stroke `#04342C`, stroke-width `1.5`.

---

## Struktur Halaman

### Halaman: `/` (Landing Page)

**Section urutan dari atas ke bawah:**

1. **Navbar**
   - Logo + nama "LAREAKSARA" (monospace)
   - Logo di /public/images/logo.png
   - Menu: Tentang, Program, Event, Donasi
   - Button "Bergabung" (primary)

2. **Hero**
   - Headline besar monospace: "Meromantiskan Literasi & Kesenian pada anak-anak."
   - Subheadline: Lare Aksara adalah komunitas literasi indie yang berfokus pada anak dan peduli terhadap perkembangan kesenian anak. Kami menghadirkan ruang kreatif melalui literasi, musik, dan seni rupa sebagai sarana pembentukan karakter dan ekspresi yang bermakna.  Banjarnegara, 27 Desember 2025.
   - 2 button: "Gabung sekarang →" dan "Lihat kegiatan"
   - Background: foto/gambar full-width dengan overlay warna tosca gelap
     (`background-image` + overlay `rgba(4, 52, 44, 0.55)`)
   - Teks di atas overlay, warna putih
   - Foto hero: gunakan `next/image` dengan `fill` dan `object-fit: cover`
   - Tinggi hero minimal `100vh`
   - Foto hero rasio: 16:9 (landscape)
- Ukuran rekomendasi upload: minimal 1280×720px, idealnya 1920×1080px
- Di Next.js gunakan:
    <div className="relative w-full h-screen"> 
      <Image src="/hero.jpeg" alt="Lareaksara" fill className="object-cover object-center" priority />
      <div className="absolute inset-0 bg-[#04342C]/55" /> {/* overlay tosca */}
    </div>
- Simpan foto hero di /public/images/hero.jpg


3. **Stats bar**
   - Jumlah anggota, buku dibaca, kegiatan per bulan
   - Data statis (hardcode)

4. **Tentang** `id="tentang"` — STATIS
- Paragraf singkat tentang apa itu Lareaksara
- Konten hardcode di kode, tidak dari Sanity

**Perjalanan** — STATIS
- Timeline atau paragraf narasi perjalanan komunitas
- Konten hardcode di kode, tidak dari Sanity

**Tujuan**  — STATIS
- List atau paragraf tujuan komunitas
- Konten hardcode di kode, tidak dari Sanity

5. **Program** `id="program"` — DINAMIS dari Sanity
   - Grid card program kegiatan Lareaksara
   - Setiap card: gambar + judul + deskripsi singkat
   - Data dari Sanity schema `program`

6. **Event** `id="event"` — DINAMIS dari Sanity
   - List semua event yang diinput admin
   - Setiap event card: nama event, tanggal, deskripsi
   - Klik event → halaman detail event `/event/[slug]`

7. **Donasi Buku & Contact Us** `id="donasi"` — STATIS
   - Heading: "Donasikan Bukumu"
   - Paragraf ajakan donasi buku untuk anak-anak
   - Button "Hubungi Kami via Email →" yang membuka mailto link
   - Email tujuan: `[aksaralare@gmail.com]`
   - Implementasi: `<a href="mailto:aksaralare@gmail.com.id?subject=Donasi Buku">Hubungi Kami</a>`
   - Boleh tambahkan info cara donasi (kirim ke alamat, atau COD saat event)
   - Konten hardcode, tidak dari Sanity

8. **Footer**
    - Nama komunitas, sosial media, copyright

---

### Halaman: `/event/[slug]` (Detail Event)

- Nama event besar (heading monospace)
- Tanggal dan lokasi
- Deskripsi lengkap event
- **Kegiatan dalam event**: grid card dengan gambar + deskripsi singkat
- Data dari Sanity schema `event` dengan field `kegiatan` (array)

---

## Sanity Schema

### Schema: `program`
```ts
// Field yang tersedia di Sanity Studio untuk diinput admin:
- judul        : string   — nama program
- gambar       : image    — foto/gambar program
- deskripsi    : text     — deskripsi singkat program
- slug         : slug     — auto dari judul
```

### Schema: `event`
```ts
// Field yang tersedia di Sanity Studio untuk diinput admin:
- namaEvent    : string   — contoh: "Hujan Bahasa & Suara"
- tanggal      : date     — tanggal pelaksanaan
- lokasi       : string   — tempat event
- deskripsi    : text     — deskripsi event
- slug         : slug     — auto dari namaEvent
- kegiatan     : array of object
    └─ judulKegiatan  : string
    └─ gambar         : image
    └─ deskripsiSingkat : text
```

---

## Konten Statis (Hardcode di Kode)

Konten berikut **tidak dari Sanity**, langsung ditulis di komponen React:

### Tentang
Perjalanan dan Tujuan tetap ada sebagai sub-section di dalam Tentang, bukan section terpisah. Jadi anchor link-nya cukup id="tentang" saja, scroll ke sana lalu kontennya urut: Tentang → Perjalanan → Tujuan dalam satu halaman yang mengalir.
> Lare Aksara adalah komunitas literasi indie yang berfokus pada anak dan peduli terhadap perkembangan kesenian anak. Kami hadir sebagai ruang tumbuh yang menggabungkan literasi dan seni dalam suasana yang hangat, kreatif, dan membebaskan.
>Berangkat dari semangat kemandirian dan gerakan akar rumput, Lare Aksara membangun kegiatan seperti kelas literasi, musikalisasi puisi, paduan suara anak, serta eksplorasi seni rupa dan menggambar. Kami percaya bahwa seni dan literasi adalah fondasi penting dalam membentuk karakter, imajinasi, serta kepekaan sosial anak-anak.
>Bagi kami, anak bukan hanya peserta kegiatan, tetapi subjek kreatif yang memiliki suara, warna, dan gagasan yang patut dihargai. Lare Aksara adalah ruang di mana kata dirawat, nada diharmonikan, dan kreativitas anak diberi tempat untuk tumbuh.

### Perjalanan
> Lare Aksara berdiri pada 27 Desember 2025 di Banjarnegara. Awalnya hanya sebuah lapak buku atau bisa disebut perpustakaan jalanan anak, setiap Minggu pagi melapak di alun-alun—sederhana, tanpa panggung, tanpa banyak rencana besar. Hanya buku-buku yang dibuka, anak-anak yang datang dengan rasa ingin tahu, dan percakapan kecil yang tumbuh begitu saja.
> Dari pertemuan-pertemuan itu, lahir ruang yang pelan-pelan berkembang. Bukan sekadar membaca, tetapi juga berbagi cerita, bernyanyi bersama, memainkan nada, hingga menggambar bersama. Ruang yang terus bergerak, menstimulasi minat dan imajinasi anak-anak yang terlibat di dalamnya.
> Lare Aksara tumbuh sebagai komunitas literasi indie yang berjalan secara mandiri dan nirlaba. Kami bergerak dari semangat kebersamaan dan kepedulian, merawat ruang kreatif ini dengan sederhana namun konsisten—agar tetap menjadi tempat yang hangat, terbuka, dan berpihak pada tumbuh kembang anak.

### Tujuan
> Lare Aksara bertujuan menghadirkan ruang kreatif yang ramah dan bermakna bagi anak-anak melalui literasi dan berbagai sub-kesenian. Kami ingin merawat keberanian berekspresi, menumbuhkan imajinasi, serta membangun kepekaan sosial sejak dini.
>Kami percaya bahwa literasi dan seni bukan sekadar kegiatan, melainkan jalan untuk membentuk karakter anak yang percaya diri, peduli, dan mampu bekerja sama dalam keberagaman.

### Donasi Buku
> Punya buku anak yang sudah tidak terpakai? Donasikan kepada kami!
> Setiap buku yang kamu berikan akan menjadi jendela baru bagi anak-anak
> yang membutuhkan. Hubungi kami via email untuk info lebih lanjut.

*Catatan: isi placeholder di atas diganti konten asli dari klien/pemilik komunitas.*
*Ganti `[aksaralare@gmail.com]` di bagian Contact Us dengan email asli Lareaksara.*

---

## Konvensi Kode

- Semua komponen di `/components`
- Semua query Sanity (GROQ) di `/sanity/lib/queries.ts`
- Semua tipe TypeScript di `/types`
- Gunakan `next/image` untuk semua gambar
- Gunakan App Router (`/app`) bukan Pages Router
- Fetch data dari Sanity di Server Component (tidak pakai `useEffect`)
- Nama file komponen: PascalCase (`HeroSection.tsx`)
- Nama file halaman: lowercase sesuai Next.js (`/app/event/[slug]/page.tsx`)

---

## Catatan untuk AI Agent

- Jangan ubah gaya desain ke material design, shadcn default, atau flat design biasa
- Selalu gunakan palet warna tosca yang sudah ditentukan
- Heading selalu monospace, body selalu sans-serif
- Border dan box-shadow adalah identitas desain, jangan dihapus
- Konten Tentang, Perjalanan, Tujuan = statis, tidak perlu query Sanity
- Konten Program dan Event = selalu fetch dari Sanity
- Halaman event detail wajib tampilkan sub-kegiatan (gambar + deskripsi)
- Section Donasi Buku menggunakan mailto link, bukan form — tidak perlu backend
- Email donasi wajib pakai subject default: `?subject=Donasi Buku untuk Lareaksara`
