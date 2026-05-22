import Image from "next/image";
import type { Program } from "@/types";

type ProgramSectionProps = {
  programs: Program[];
};

function EmptyProgramImage() {
  return (
    <div className="flex h-full min-h-56 items-center justify-center bg-[#E1F5EE]">
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
    <section id="program" className="border-y-[1.5px] border-[#04342C] bg-[#E1F5EE] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border-[1.5px] border-[#1D9E75] bg-white px-4 py-2 text-sm font-black text-[#0F6E56]">
            Program
          </span>
          <h2 className="font-heading mt-5 text-3xl leading-tight text-[#04342C] sm:text-5xl">
            Kegiatan yang menumbuhkan rasa ingin tahu.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  ) : (
                    <EmptyProgramImage />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-2xl leading-tight text-[#04342C]">
                    {program.judul}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5F5E5A]">
                    {program.deskripsi}
                  </p>
                </div>
              </article>
            ))
          ) : (
            <div className="soft-card bg-white p-6 text-[#5F5E5A] md:col-span-2 lg:col-span-3">
              Program Lare Aksara akan segera tampil di sini.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
