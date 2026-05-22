import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b-[1.5px] border-[#04342C]">
      <Image
        src="/images/hero.jpg"
        alt="Kegiatan Lare Aksara bersama anak-anak"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-[#04342C]/55" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-white">
          <span className="mb-5 inline-flex rounded-full border-[1.5px] border-white bg-[#E1F5EE] px-4 py-2 text-sm font-black text-[#0F6E56] shadow-[2px_2px_0_#04342C]">
            Banjarnegara, 27 Desember 2025
          </span>
          <h1 className="font-heading text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
            Meromantiskan Literasi & Kesenian pada anak-anak.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white sm:text-lg">
            Lare Aksara adalah komunitas literasi indie yang berfokus pada anak
            dan peduli terhadap perkembangan kesenian anak. Kami menghadirkan
            ruang kreatif melalui literasi, musik, dan seni rupa sebagai sarana
            pembentukan karakter dan ekspresi yang bermakna. Banjarnegara, 27
            Desember 2025.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#donasi"
              className="focus-soft inline-flex items-center justify-center rounded-lg border-[1.5px] border-[#04342C] bg-[#1D9E75] px-6 py-3 font-black text-white shadow-[2px_2px_0_#04342C] transition-transform hover:-translate-y-0.5"
            >
              Gabung sekarang →
            </Link>
            <Link
              href="/#event"
              className="focus-soft inline-flex items-center justify-center rounded-lg border-[1.5px] border-white bg-white px-6 py-3 font-black text-[#04342C] shadow-[2px_2px_0_#9FE1CB] transition-transform hover:-translate-y-0.5"
            >
              Lihat kegiatan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
