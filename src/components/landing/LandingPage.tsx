import { Hero } from '@/components/landing/Hero'
import { Navbar } from '@/components/landing/Navbar'
import { StatsStrip } from '@/components/landing/StatsStrip'
import { TrustStrip } from '@/components/landing/TrustStrip'

export function LandingPage() {
  return (
    <div id="top" className="min-h-svh bg-background">
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <TrustStrip />
      </main>
    </div>
  )
}
