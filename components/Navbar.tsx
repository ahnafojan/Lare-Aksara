import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { label: "Tentang", href: "/#tentang" },
  { label: "Program", href: "/#program" },
  { label: "Event", href: "/#event" },
  { label: "Donasi", href: "/#donasi" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[1.5px] border-[#04342C] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-soft flex items-center gap-3 rounded-lg">
          <Image
            src="/images/logo.png"
            alt="Logo Lare Aksara"
            width={48}
            height={48}
            className="h-12 w-12 rounded-md object-contain"
            priority
          />
          <span className="font-heading text-xl text-[#04342C] sm:text-2xl">
            LAREAKSARA
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-soft rounded-md px-1 py-2 text-sm font-bold text-[#04342C] transition-colors hover:text-[#1D9E75]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#donasi"
          className="focus-soft rounded-lg border-[1.5px] border-[#04342C] bg-[#1D9E75] px-4 py-2.5 text-sm font-black text-white shadow-[2px_2px_0_#04342C] transition-transform hover:-translate-y-0.5 md:px-5"
        >
          Bergabung
        </Link>
      </nav>
    </header>
  );
}
