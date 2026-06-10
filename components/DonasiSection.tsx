import Image from "next/image";

export default function DonasiSection() {
  return (
    <section
      id="donasi"
      className="relative overflow-hidden border-y-[1.5px] border-[#04342C] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 xl:px-8"
    >
      <Image
        src="/images/dd.jpeg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#04342C]/65" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
        <div className="max-w-3xl">
          <span className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-white bg-[#F9FAFB] px-4 py-2 text-base font-black text-[#0F6E56] shadow-[2px_2px_0_#04342C]">
            Donasi Buku & Contact Us
          </span>
          <h2 className="font-heading mt-5 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Donasikan Bukumu
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-white/90">
            <p>Punya buku anak yang sudah tidak terpakai? Donasikan kepada kami!</p>
            <p>
              Setiap buku yang kamu berikan akan menjadi jendela baru bagi
              anak-anak yang membutuhkan. Hubungi kami via email untuk info
              lebih lanjut.
            </p>
            <p>
              Buku dapat dikirim sesuai arahan tim, atau diserahkan langsung
              saat Lare Aksara membuka lapak dan kegiatan bersama anak-anak.
            </p>
          </div>
          <a
            href="mailto:aksaralare@gmail.com?subject=Donasi%20Buku%20untuk%20Lareaksara"
            className="focus-soft mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-lg border-[1.5px] border-[#04342C] bg-[#1D9E75] px-6 py-3 font-black text-white shadow-[2px_2px_0_#04342C] transition-transform hover:-translate-y-0.5 lg:w-auto"
          >
            Hubungi Kami via Email -&gt;
          </a>
        </div>

        <div className="soft-card hidden w-full max-w-xl overflow-hidden bg-white p-2 md:block lg:ml-auto">
          <div className="relative aspect-[4/3] min-h-64 overflow-hidden rounded-[6px] border-[1.5px] border-[#04342C]">
            <Image
              src="/images/nyanyi.jpg"
              alt="Ilustrasi donasi buku Lare Aksara"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
