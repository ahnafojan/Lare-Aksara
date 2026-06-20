import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/types";

type ProgramSectionProps = {
  programs: Program[];
  headingAs?: "h1" | "h2";
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

export default function ProgramSection({
  programs,
  headingAs: Heading = "h2",
}: ProgramSectionProps) {
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
          <span className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-[#1a1a1a] bg-[#04342C] px-4 py-2 text-base font-black text-[#FAF9F6]">
            Program
          </span>
          <Heading className="font-heading mt-5 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Kegiatan yang menumbuhkan rasa ingin tahu.
          </Heading>
        </div>

        <div className="-mr-4 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 pr-4 sm:-mr-6 sm:gap-4 sm:pr-6 md:-mr-8 md:pr-8 lg:-mr-16 lg:mt-10 lg:gap-6 lg:pr-16 xl:-mr-8 xl:pr-8">
          {programs.length > 0 ? (
            programs.map((program) => {
              const href = program.slug?.current
                ? `/program/${program.slug.current}`
                : "/#program";

              return (
                <Link
                  key={program._id}
                  href={href}
                  className="focus-soft soft-card group flex aspect-square w-[78vw] max-w-[19rem] shrink-0 snap-start flex-col overflow-hidden bg-white transition-transform hover:-translate-y-0.5"
                >
                  <div className="relative basis-[44%] shrink-0 border-b-[1.5px] border-[#04342C]">
                    {program.gambar?.asset?.url ? (
                      <Image
                        src={program.gambar.asset.url}
                        alt={program.judul}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width: 640px) 19rem, 78vw"
                      />
                    ) : (
                      <EmptyProgramImage />
                    )}
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-4 lg:p-5">
                    <h3 className="font-heading line-clamp-2 text-xl leading-tight text-[#04342C] sm:text-2xl">
                      {program.judul}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#5F5E5A] sm:text-base sm:leading-7">
                      {program.deskripsi}
                    </p>
                    <span className="mt-auto pt-3 text-sm font-black text-[#1D9E75] group-hover:text-[#04342C] sm:text-base">
                      Lihat detail -&gt;
                    </span>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="soft-card bg-white p-6 text-base text-[#5F5E5A]">
              Program Lare Aksara akan segera tampil di sini.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
