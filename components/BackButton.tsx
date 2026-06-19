import Link from "next/link";

type BackButtonProps = {
  href: string;
  label: string;
};

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="focus-soft inline-flex min-h-11 w-fit max-w-full self-start items-center gap-2 rounded-lg border-[1.5px] border-[#04342C] bg-white px-4 py-2 text-base font-black text-[#04342C] shadow-[2px_2px_0_#04342C] transition-transform hover:-translate-y-0.5"
    >
      <span
        aria-hidden="true"
        className="text-xl leading-none"
      >
        &larr;
      </span>
      <span>{label}</span>
    </Link>
  );
}
