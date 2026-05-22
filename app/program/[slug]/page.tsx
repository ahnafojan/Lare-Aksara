import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProgramImageCarousel from "@/components/ProgramImageCarousel";
import { getProgramBySlug } from "@/sanity/lib/fetchers";
import type { SanityImage } from "@/types";

type ProgramDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export default async function ProgramDetailPage({
  params,
}: ProgramDetailPageProps) {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const programImages = [program.gambar, ...(program.galeri ?? [])].filter(
    (image): image is SanityImage => Boolean(image?.asset?.url),
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="border-b-[1.5px] border-[#04342C] bg-[#E1F5EE] px-4 py-3 sm:px-6 md:px-8 lg:px-16 xl:px-8">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-start">
            <Link
              href="/#program"
              className="focus-soft inline-flex min-h-11 items-center gap-2 rounded-full border-[1.5px] border-[#04342C] bg-white px-4 text-base font-black text-[#04342C] shadow-[1px_1px_0_#9FE1CB] transition-transform hover:-translate-y-0.5"
            >
              <span aria-hidden="true">&larr;</span>
              <span>Kembali ke Program</span>
            </Link>
          </div>
        </div>

        <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-16 xl:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <span className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-[#1D9E75] bg-[#E1F5EE] px-4 py-2 text-base font-black text-[#0F6E56]">
              Detail Program
            </span>
            <h1 className="font-heading mt-5 text-4xl leading-tight text-[#04342C] md:text-6xl">
              {program.judul}
            </h1>

            <ProgramImageCarousel images={programImages} title={program.judul} />

            <article className="mt-8 rounded-lg border-[1.5px] border-[#04342C] bg-[#E1F5EE] p-5 text-base leading-8 text-[#5F5E5A] shadow-[2px_2px_0_#04342C] sm:p-6 sm:text-lg sm:leading-9">
              <p className="whitespace-pre-line">{program.deskripsi}</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
