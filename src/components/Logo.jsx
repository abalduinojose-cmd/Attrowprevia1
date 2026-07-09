export function LogoMark({ className = "h-10 w-10" }) {
  return (
    <svg
      viewBox="0 0 120 110"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <g
        stroke="#e38e0f"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M60 10 L14 102" />
        <path d="M60 10 L81 52" />
        <path d="M40 66 H64" />
        <path d="M83 74 L97 102" />
      </g>
      <path d="M64 54 L88 66 L68 80 Z" fill="#e38e0f" />
    </svg>
  );
}

export default function Logo({ className = "" }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 md:h-10 md:w-10" />
      <span className="leading-none">
        <span className="block font-display text-lg font-bold tracking-[0.28em] text-white md:text-xl">
          ATTROW
        </span>
        <span className="mt-1 block text-[9px] font-medium tracking-[0.34em] text-muted md:text-[10px]">
          ASSESSORIA CONTÁBIL
        </span>
      </span>
    </span>
  );
}
