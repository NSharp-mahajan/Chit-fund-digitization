import { Hero } from '@/components/landing/Hero'
import { Navbar } from '@/components/landing/Navbar'
import { StatsStrip } from '@/components/landing/StatsStrip'
import { TrustStrip } from '@/components/landing/TrustStrip'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { ProductFeatures } from '@/components/landing/ProductFeatures'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { AiRiskSection } from '@/components/landing/AiRiskSection'
import { UserRolesSection } from '@/components/landing/UserRolesSection'
import { TrustImpactSection } from '@/components/landing/TrustImpactSection'
import { FinalCtaSection } from '@/components/landing/FinalCtaSection'
import { Footer } from '@/components/landing/Footer'

export function LandingPage() {
  return (
    <div id="top" className="min-h-svh bg-background">
      <Navbar />
      <main>
        {/* 1. Existing Hero */}
        <Hero />

        {/* 2. Existing Metrics / Trust Strip */}
        <StatsStrip />
        <TrustStrip />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Product Features Section */}
        <ProductFeatures />

        {/* 5. How It Works Section */}
        <HowItWorks />

        {/* 6. AI Risk Monitoring Section */}
        <AiRiskSection />

        {/* 7. User Roles Section */}
        <UserRolesSection />

        {/* 8. Trust / Impact Section */}
        <TrustImpactSection />

        {/* 9. Final CTA */}
        <FinalCtaSection />
      </main>

      {/* 10. Extended Footer */}
      <Footer />
    </div>
  )
}
