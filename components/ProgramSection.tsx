import Image from "next/image";
import type { Program } from "@/types";

type ProgramSectionProps = {
  programs: Program[];
};

function EmptyProgramImage() {
  return (
    <div className="flex h-full min-h-28 items-center justify-center bg-[#E1F5EE] sm:min-h-40">
      <svg
        aria-hidden="true"
        viewBox="0 0 160 120"
        className="h-32 w-40"
        fill="none"
      >
        <path d="M24 24H72C82 24 88 31 88 41V96C80 88 72 86 60 86H24V24Z" fill="#9FE1CB" stroke="#04342C" strokeWidth="1.5" />
        <path d="M88 41C88 31 94 24 104 24H136V86H108C100 86 94 88 88 96V41Z" fill="#FFFFFF" stroke="#04342C" strokeWidth="1.5" />
        <path d="M88 41V96" stroke="#04342C" strokeWidth="1.5" />
        <path d="M38 42H66M38 56H68M106 42H126M106 56H126" stroke="#04342C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function ProgramSection({ programs }: ProgramSectionProps) {
  return (
    <section
      id="program"
      className="relative overflow-hidden border-y-[1.5px] border-[#04342C] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 xl:px-8"
    >
      <Image
        src="/images/lare.JPG"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#04342C]/68" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-white bg-[#E1F5EE] px-4 py-2 text-base font-black text-[#0F6E56] shadow-[2px_2px_0_#04342C]">
            Program
          </span>
          <h2 className="font-heading mt-5 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Kegiatan yang menumbuhkan rasa ingin tahu.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:mt-10 lg:gap-6">
          {programs.length > 0 ? (
            programs.map((program) => (
              <article key={program._id} className="soft-card overflow-hidden bg-white">
                <div className="relative aspect-[4/3] border-b-[1.5px] border-[#04342C]">
                  {program.gambar?.asset?.url ? (
                    <Image
                      src={program.gambar.asset.url}
                      alt={program.judul}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 50vw"
                    />
                  ) : (
                    <EmptyProgramImage />
                  )}
                </div>
                <div className="p-3 sm:p-4 lg:p-5">
                  <h3 className="font-heading text-xl leading-tight text-[#04342C] sm:text-2xl">
                    {program.judul}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-base leading-7 text-[#5F5E5A] lg:mt-3">
                    {program.deskripsi}
                  </p>
                </div>
              </article>
            ))
          ) : (
            <div className="soft-card col-span-2 bg-white p-6 text-base text-[#5F5E5A] md:col-span-3">
              Program Lare Aksara akan segera tampil di sini.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
