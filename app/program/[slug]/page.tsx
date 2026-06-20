import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProgramImageCarousel from "@/components/ProgramImageCarousel";
import { absoluteUrl, createExcerpt, siteConfig } from "@/lib/site";
import { getProgramBySlug } from "@/sanity/lib/fetchers";
import type { SanityImage } from "@/types";

type ProgramDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: ProgramDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);

  if (!program) {
    return {
      title: "Program tidak ditemukan",
      robots: { index: false, follow: false },
    };
  }

  const description = createExcerpt(program.deskripsi);
  const imageUrl = program.gambar?.asset?.url ?? absoluteUrl("/images/hero.jpg");
  const programUrl = `/program/${encodeURIComponent(slug)}`;

  return {
    title: program.judul,
    description,
    alternates: {
      canonical: programUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: programUrl,
      title: program.judul,
      description,
      images: [
        {
          url: imageUrl,
          alt: `Program ${program.judul}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: program.judul,
      description,
      images: [imageUrl],
    },
  };
}

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
        <section className="bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-16 xl:px-8">
          <div className="mx-auto w-full max-w-5xl">
            <BackButton href="/#program" label="Kembali ke Program" />
            <h1 className="font-heading mt-5 text-4xl leading-tight text-[#04342C] md:text-6xl">
              {program.judul}
            </h1>

            <ProgramImageCarousel images={programImages} title={program.judul} />

            <article className="mt-8 rounded-lg border-[1.5px] border-[#04342C] bg-[#F9FAFB] p-5 text-base leading-8 text-[#5F5E5A] shadow-[2px_2px_0_#04342C] sm:p-6 sm:text-lg sm:leading-9">
              <p className="whitespace-pre-line">{program.deskripsi}</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
