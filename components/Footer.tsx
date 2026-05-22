import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#04342C] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-2xl">LAREAKSARA</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#E1F5EE]">
            Komunitas literasi indie untuk anak-anak di Banjarnegara melalui
            buku, musik, dan seni rupa.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm font-bold">
          <Link className="focus-soft rounded-md px-1 py-1 hover:text-[#9FE1CB]" href="/#tentang">
            Tentang
          </Link>
          <Link className="focus-soft rounded-md px-1 py-1 hover:text-[#9FE1CB]" href="/#program">
            Program
          </Link>
          <Link className="focus-soft rounded-md px-1 py-1 hover:text-[#9FE1CB]" href="/#event">
            Event
          </Link>
          <a
            className="focus-soft rounded-md px-1 py-1 hover:text-[#9FE1CB]"
            href="mailto:aksaralare@gmail.com?subject=Donasi%20Buku%20untuk%20Lareaksara"
          >
            Email
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl border-t-[1.5px] border-[#5DCAA5] pt-5 text-sm text-[#E1F5EE]">
        © 2026 Lare Aksara. Semua hak dirawat bersama.
      </div>
    </footer>
  );
}
