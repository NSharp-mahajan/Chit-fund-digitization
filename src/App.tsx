import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { ComplianceStrip } from './components/ComplianceStrip';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { HowItWorksSection } from './components/HowItWorksSection';
import { UserRolesSection } from './components/UserRolesSection';
import { RiskEngineSection } from './components/RiskEngineSection';
import { TestimonialSection } from './components/TestimonialSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ProductDemoModal } from './components/ProductDemoModal';
import { GetStartedModal } from './components/GetStartedModal';
import { SignInModal } from './components/SignInModal';

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [getStartedModalOpen, setGetStartedModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  const handleGetStarted = () => {
    setGetStartedModalOpen(true);
  };

  const handleOpenSignIn = () => {
    setSignInModalOpen(true);
  };

  const handleSelectRole = (_role: 'organiser' | 'member') => {
    // Open the interactive sandbox session directly for the selected role
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col font-sans">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        onGetStarted={handleGetStarted}
        onOpenSignIn={handleOpenSignIn}
      />

      <main className="flex-grow">
        {/* 2. Hero Section with Live Dashboard Preview Card */}
        <Hero
          onOpenDemo={handleOpenDemo}
          onGetStarted={handleGetStarted}
        />

        {/* 3. Metrics Strip */}
        <StatsStrip />

        {/* 4. Trust & Compliance Strip */}
        <ComplianceStrip />

        {/* 5. Legacy Bottleneck Problems */}
        <ProblemSection />

        {/* 6. Product Core Features Grid (#product) */}
        <FeaturesGrid onSelectFeature={() => handleOpenDemo()} />

        {/* 7. NEW: How It Works Lifecycle Workflow (#how-it-works) */}
        <HowItWorksSection onExploreStep={() => handleOpenDemo()} />

        {/* 8. NEW: User-Role Responsibilities: Organiser vs Member */}
        <UserRolesSection onSelectRole={handleSelectRole} />

        {/* 9. AI Risk Monitoring & Decision Support Spotlight (#ai-risk-monitoring) */}
        <RiskEngineSection />

        {/* 10. Social Proof & Testimonial (#about) */}
        <TestimonialSection />

        {/* 11. Dark High-Conversion CTA Banner */}
        <CtaBanner
          onOpenDemo={handleOpenDemo}
          onGetStarted={handleGetStarted}
        />
      </main>

      {/* 12. Institutional & Regulatory Compliance Footer */}
      <Footer />

      {/* Interactive Hackathon Prototype Modals */}
      <ProductDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <GetStartedModal
        isOpen={getStartedModalOpen}
        onClose={() => setGetStartedModalOpen(false)}
      />

      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
        onSelectSandboxMode={(mode) => {
          handleSelectRole(mode);
        }}
      />
    </div>
  );
}

export default App;
