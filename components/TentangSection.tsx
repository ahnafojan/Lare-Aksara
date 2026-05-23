"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";

function BookStackIllustration() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 160"
      className="h-auto w-full max-w-xs"
      fill="none"
    >
      <rect x="28" y="98" width="156" height="24" rx="7" fill="#9FE1CB" stroke="#04342C" strokeWidth="1.5" />
      <rect x="42" y="74" width="146" height="24" rx="7" fill="#FFFFFF" stroke="#04342C" strokeWidth="1.5" />
      <rect x="32" y="50" width="132" height="24" rx="7" fill="#5DCAA5" stroke="#04342C" strokeWidth="1.5" />
      <path d="M72 38C91 22 111 24 130 42V112C111 96 91 94 72 108V38Z" fill="#E1F5EE" stroke="#04342C" strokeWidth="1.5" />
      <path d="M130 42C148 24 168 22 188 38V108C168 94 148 96 130 112V42Z" fill="#FFFFFF" stroke="#04342C" strokeWidth="1.5" />
      <path d="M130 42V112" stroke="#04342C" strokeWidth="1.5" />
      <path d="M86 48C96 43 106 44 116 50" stroke="#04342C" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M144 50C154 44 164 43 174 48" stroke="#04342C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const tujuan = [
  "Menghadirkan ruang kreatif yang ramah dan bermakna bagi anak-anak.",
  "Merawat keberanian berekspresi melalui literasi dan berbagai sub-kesenian.",
  "Menumbuhkan imajinasi, kepekaan sosial, percaya diri, dan kerja sama dalam keberagaman.",
];

type MobileFoldCardProps = {
  title: string;
  preview: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

function MobileFoldCard({
  title,
  preview,
  children,
  className = "",
  contentClassName = "",
}: MobileFoldCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <article
      className={`soft-card relative p-5 pl-6 sm:p-6 sm:pl-7 md:p-8 ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute bottom-[1.5px] left-[1.5px] top-[1.5px] block w-2 rounded-l-[5px] bg-[#9FE1CB] lg:hidden"
      />
      <h3 className="font-heading hidden text-2xl text-[#04342C] lg:block">
        {title}
      </h3>

      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((value) => !value)}
        className="focus-soft flex w-full items-start justify-between gap-4 rounded-md text-left transition-transform duration-200 active:translate-x-[1px] active:translate-y-[1px] active:scale-[0.99] lg:hidden"
      >
        <span>
          <span className="font-heading block text-2xl text-[#04342C]">
            {title}
          </span>
          <span className="mt-3 block max-h-[5.25rem] overflow-hidden text-sm leading-7 text-[#5F5E5A]">
            {preview}
          </span>
          <span className="mt-4 inline-flex min-h-9 items-center rounded-full border-[1.5px] border-[#04342C] bg-white px-3 text-sm font-black text-[#04342C] shadow-[1px_1px_0_#04342C]">
            {isOpen ? "Tutup" : "Baca lengkap"}
          </span>
        </span>
        <span
          aria-hidden="true"
          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border-[1.5px] border-[#04342C] text-2xl font-black leading-none shadow-[1px_1px_0_#04342C] transition duration-300 motion-reduce:transition-none ${
            isOpen
              ? "rotate-45 bg-[#04342C] text-white"
              : "bg-[#FAF9F6] text-[#04342C]"
          }`}
        >
          +
        </span>
      </button>

      <div
        id={contentId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none lg:grid-rows-[1fr] lg:opacity-100 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className={`min-h-0 ${
            isOpen ? "overflow-visible" : "overflow-hidden"
          } lg:overflow-visible`}
        >
          <div
            className={`origin-top transform-gpu border-t-[1.5px] border-[#04342C]/15 pt-4 transition-transform duration-300 ease-out motion-reduce:transition-none lg:border-t-0 lg:[transform:perspective(900px)_rotateX(0deg)_translateY(0)] ${
              isOpen
                ? "[transform:perspective(900px)_rotateX(0deg)_translateY(0)]"
                : "[transform:perspective(900px)_rotateX(-10deg)_translateY(-8px)]"
            } ${contentClassName}`}
          >
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TentangSection() {
  return (
    <section id="tentang" className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 xl:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:pt-2">
          <span className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-[#1a1a1a] bg-[#04342C] px-4 py-2 text-base font-black text-[#FAF9F6]">
            Tentang
          </span>
          <h2 className="font-heading mt-5 max-w-xl text-3xl leading-tight text-[#04342C] sm:text-4xl md:text-5xl lg:text-6xl">
            Ruang kata, nada, dan warna untuk anak.
          </h2>
          <p className="mt-5 hidden max-w-md text-base leading-8 text-[#5F5E5A] lg:block">
            Komunitas ini tumbuh dari lapak buku sederhana menjadi ruang
            kreatif yang merawat keberanian anak untuk membaca, bernyanyi,
            menggambar, dan bercerita.
          </p>
          <div className="mt-8 lg:max-w-sm">
            <BookStackIllustration />
          </div>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:space-y-0">
          <MobileFoldCard
            title="Tentang"
            preview="Lare Aksara adalah ruang tumbuh yang menggabungkan literasi dan seni dalam suasana hangat, kreatif."
            className="bg-white lg:col-span-2"
            contentClassName="space-y-4 text-base leading-8 text-[#5F5E5A] lg:columns-2 lg:gap-8"
          >
            <p>
              Lare Aksara adalah komunitas literasi indie yang berfokus pada
              anak dan peduli terhadap perkembangan kesenian anak. Kami hadir
              sebagai ruang tumbuh yang menggabungkan literasi dan seni dalam
              suasana yang hangat, kreatif, dan membebaskan. Berangkat dari
              semangat kemandirian dan gerakan akar rumput, Lare Aksara
              membangun kegiatan seperti kelas literasi, musikalisasi puisi,
              paduan suara anak, serta eksplorasi seni rupa dan menggambar. Kami
              percaya bahwa seni dan literasi adalah fondasi penting dalam
              membentuk karakter, imajinasi, serta kepekaan sosial anak-anak.
              Bagi kami, anak bukan hanya peserta kegiatan, tetapi subjek
              kreatif yang memiliki suara, warna, dan gagasan yang patut
              dihargai. Lare Aksara adalah ruang di mana kata dirawat, nada
              diharmonikan, dan kreativitas anak diberi tempat untuk tumbuh.
            </p>
          </MobileFoldCard>

          <MobileFoldCard
            title="Perjalanan"
            preview="Berawal dari lapak buku sederhana di alun-alun, Lare Aksara pelan-pelan tumbuh menjadi ruang cerita, nada, dan gambar."
            className="bg-white lg:min-h-full"
            contentClassName="space-y-4 text-base leading-8 text-[#5F5E5A]"
          >
            <p>
              Lare Aksara berdiri pada 27 Desember 2025 di Banjarnegara.
              Awalnya hanya sebuah lapak buku atau bisa disebut perpustakaan
              jalanan anak, setiap Minggu pagi melapak di alun-alun, sederhana,
              tanpa panggung, tanpa banyak rencana besar. Hanya buku-buku yang
              dibuka, anak-anak yang datang dengan rasa ingin tahu, dan
              percakapan kecil yang tumbuh begitu saja. Dari pertemuan-pertemuan
              itu, lahir ruang yang pelan-pelan berkembang. Bukan sekadar
              membaca, tetapi juga berbagi cerita, bernyanyi bersama, memainkan
              nada, hingga menggambar bersama. Ruang yang terus bergerak,
              menstimulasi minat dan imajinasi anak-anak yang terlibat di
              dalamnya. Lare Aksara tumbuh sebagai komunitas literasi indie yang
              berjalan secara mandiri dan nirlaba. Kami bergerak dari semangat
              kebersamaan dan kepedulian, merawat ruang kreatif ini dengan
              sederhana namun konsisten agar tetap menjadi tempat yang hangat,
              terbuka, dan berpihak pada tumbuh kembang anak.
            </p>
          </MobileFoldCard>

          <MobileFoldCard
            title="Tujuan"
            preview="Kami ingin merawat keberanian berekspresi, menumbuhkan imajinasi, dan membangun kepekaan sosial anak sejak dini."
            className="bg-white lg:min-h-full"
            contentClassName="text-base leading-8 text-[#5F5E5A]"
          >
            <p>
              Lare Aksara bertujuan menghadirkan ruang kreatif yang ramah dan
              bermakna bagi anak-anak melalui literasi dan berbagai sub-kesenian.
              Kami ingin merawat keberanian berekspresi, menumbuhkan imajinasi,
              serta membangun kepekaan sosial sejak dini.
            </p>
            <p className="mt-4 text-base leading-8 text-[#5F5E5A]">
              Kami percaya bahwa literasi dan seni bukan sekadar kegiatan,
              melainkan jalan untuk membentuk karakter anak yang percaya diri,
              peduli, dan mampu bekerja sama dalam keberagaman.
            </p>
            <ul className="mt-6 grid gap-3 pr-0.5 pb-0.5 sm:pr-0 lg:pr-1 lg:pb-1">
              {tujuan.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border-[1.5px] border-[#04342C] bg-[#E1F5EE] px-4 py-3 text-[#04342C] shadow-[1px_1px_0_#9FE1CB]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-2.5 w-2.5 shrink-0 border-[1.5px] border-[#04342C] bg-[#5DCAA5] shadow-[1px_1px_0_#04342C]"
                  />
                  <span className="text-sm font-semibold leading-7 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </MobileFoldCard>
        </div>
      </div>
    </section>
  );
}
