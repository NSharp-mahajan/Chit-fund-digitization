import { Logo } from '@/components/landing/Logo'
import { footerContent } from '@/data/landing'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          {/* Brand & Tagline */}
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-[14px] font-medium text-navy-soft">
              {footerContent.tagline}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              {footerContent.description}
            </p>
          </div>

          {/* Nav Links & Legal */}
          <div className="flex flex-wrap gap-12 sm:gap-16">
            {/* Section Navigation */}
            <div>
              <p className="text-[12px] font-bold uppercase tracking-wider text-navy">
                Platform
              </p>
              <ul className="mt-4 space-y-2.5">
                {footerContent.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[13.5px] font-medium text-muted transition-colors hover:text-navy"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <p className="text-[12px] font-bold uppercase tracking-wider text-navy">
                Governance
              </p>
              <ul className="mt-4 space-y-2.5">
                {footerContent.legal.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[13.5px] font-medium text-muted transition-colors hover:text-navy"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-[12.5px] text-muted">
            © {new Date().getFullYear()} ChitLedger. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[12px] text-muted">
            <span>Cryptographic Ledger Verification</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>Explainable AI Risk Engine</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
