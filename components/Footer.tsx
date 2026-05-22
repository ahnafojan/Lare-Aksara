import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#04342C] px-4 py-10 text-white sm:px-6 md:px-8 lg:px-16 xl:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div>
          <p className="font-heading text-2xl">LAREAKSARA</p>
          <p className="mt-2 max-w-xl text-base leading-7 text-[#E1F5EE]">
            Komunitas literasi indie untuk anak-anak di Banjarnegara melalui
            buku, musik, dan seni rupa.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-base font-bold">
          <Link className="focus-soft inline-flex min-h-11 items-center rounded-md px-3 hover:text-[#9FE1CB]" href="/#tentang">
            Tentang
          </Link>
          <Link className="focus-soft inline-flex min-h-11 items-center rounded-md px-3 hover:text-[#9FE1CB]" href="/#program">
            Program
          </Link>
          <Link className="focus-soft inline-flex min-h-11 items-center rounded-md px-3 hover:text-[#9FE1CB]" href="/#event">
            Event
          </Link>
          <a
            className="focus-soft inline-flex min-h-11 items-center rounded-md px-3 hover:text-[#9FE1CB]"
            href="mailto:aksaralare@gmail.com?subject=Donasi%20Buku%20untuk%20Lareaksara"
          >
            Email
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl border-t-[1.5px] border-[#5DCAA5] pt-5 text-center text-base text-[#E1F5EE] lg:text-left">
        (c) 2026 Lare Aksara. Semua hak dirawat bersama.
      </div>
    </footer>
  );
}
