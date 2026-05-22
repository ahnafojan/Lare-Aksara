export default function DonasiSection() {
  return (
    <section id="donasi" className="border-y-[1.5px] border-[#04342C] bg-[#E1F5EE] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border-[1.5px] border-[#1D9E75] bg-white px-4 py-2 text-sm font-black text-[#0F6E56]">
            Donasi Buku & Contact Us
          </span>
          <h2 className="font-heading mt-5 text-3xl leading-tight text-[#04342C] sm:text-5xl">
            Donasikan Bukumu
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-8 text-[#5F5E5A]">
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
            className="focus-soft mt-8 inline-flex rounded-lg border-[1.5px] border-[#04342C] bg-[#1D9E75] px-6 py-3 font-black text-white shadow-[2px_2px_0_#04342C] transition-transform hover:-translate-y-0.5"
          >
            Hubungi Kami via Email →
          </a>
        </div>

        <div className="soft-card bg-white p-6">
          <svg
            aria-hidden="true"
            viewBox="0 0 260 220"
            className="h-auto w-full"
            fill="none"
          >
            <rect x="50" y="138" width="150" height="34" rx="8" fill="#9FE1CB" stroke="#04342C" strokeWidth="1.5" />
            <rect x="62" y="104" width="150" height="34" rx="8" fill="#FFFFFF" stroke="#04342C" strokeWidth="1.5" />
            <rect x="44" y="70" width="150" height="34" rx="8" fill="#5DCAA5" stroke="#04342C" strokeWidth="1.5" />
            <path d="M92 58C111 41 130 43 150 62V150C130 134 111 132 92 146V58Z" fill="#E1F5EE" stroke="#04342C" strokeWidth="1.5" />
            <path d="M150 62C170 43 189 41 208 58V146C189 132 170 134 150 150V62Z" fill="#FFFFFF" stroke="#04342C" strokeWidth="1.5" />
            <path d="M150 62V150" stroke="#04342C" strokeWidth="1.5" />
            <path d="M107 75C118 69 128 70 138 77M165 77C176 70 186 69 197 75" stroke="#04342C" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
