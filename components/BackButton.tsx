import Link from "next/link";

type BackButtonProps = {
  href: string;
  label: string;
};

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="focus-soft inline-flex h-10 w-fit max-w-full self-start items-stretch overflow-hidden rounded-[5px] text-white transition-opacity hover:opacity-80"
      style={{ backgroundColor: "var(--color-text-primary, #1D9E75)" }}
    >
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/15 text-[20px] leading-none"
      >
        &larr;
      </span>
      <span className="flex h-10 items-center px-4 text-[13px] font-semibold leading-none">
        {label}
      </span>
    </Link>
  );
}
