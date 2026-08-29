interface LogoProps {
  size?: number;
  inverse?: boolean;
}

export default function Logo({ size = 56, inverse = false }: LogoProps) {
  const mark = inverse ? "#FFFFFF" : "#2D6A4F";
  const fg = inverse ? "#FFFFFF" : "#1A3D2E";
  const sub = inverse ? "rgba(255,255,255,0.7)" : "#6B9E85";

  return (
    <div className="inline-flex items-center gap-3.5">
      <div
        className="flex flex-shrink-0 items-center justify-center rounded-full"
        style={{
          width: size,
          height: size,
          background: mark,
          boxShadow: inverse ? "none" : "0 6px 14px rgba(45,106,79,0.22)",
        }}
      >
        <svg
          width={size * 0.52}
          height={size * 0.52}
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* Quill feather */}
          <path
            d="M18.5 3.5c-4.8.4-9 3-11.4 7.4C5.6 13.4 5 16 5 18.5c2.5 0 5.1-.6 7.6-2.1 4.4-2.4 7-6.6 7.4-11.4-.5-.5-1-1-1.5-1.5Z"
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M12.2 11.8 5.5 18.5"
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="5" cy="19" r="1" fill="#A8D5BE" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span
          className="font-serif font-bold tracking-tight"
          style={{ fontSize: size * 0.36, color: fg }}
        >
          Quillwood
        </span>
        <span
          className="mt-1 font-medium uppercase tracking-[0.22em]"
          style={{ fontSize: Math.max(9, size * 0.17), color: sub }}
        >
          — Wellness Centre —
        </span>
      </div>
    </div>
  );
}
