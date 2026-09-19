export function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <span className="flex h-9 w-9 items-center justify-center" aria-hidden>
        <svg viewBox="0 0 36 36" className="h-9 w-9" fill="none">
          <path
            d="M18 3.2 31.2 10.6v14.8L18 32.8 4.8 25.4V10.6L18 3.2Z"
            fill="#0E7C6B"
          />
          <path
            d="M12.2 13.2h11.6M12.2 18h11.6M12.2 22.8h7.4"
            stroke="white"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-[17px] font-bold tracking-tight text-navy">
        ChitLedger
      </span>
    </span>
  )
}
