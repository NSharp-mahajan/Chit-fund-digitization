import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

// Feature: Member Management
import Members from './pages/Members.jsx';
import MemberDetails from './pages/MemberDetails.jsx';

function LandingPage() {
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
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col font-sans">
      <Navbar
        onOpenDemo={handleOpenDemo}
        onGetStarted={handleGetStarted}
        onOpenSignIn={handleOpenSignIn}
      />

      <main className="flex-grow">
        <Hero
          onOpenDemo={handleOpenDemo}
          onGetStarted={handleGetStarted}
        />
        <StatsStrip />
        <ComplianceStrip />
        <ProblemSection />
        <FeaturesGrid onSelectFeature={() => handleOpenDemo()} />
        <HowItWorksSection onExploreStep={() => handleOpenDemo()} />
        <UserRolesSection onSelectRole={handleSelectRole} />
        <RiskEngineSection />
        <TestimonialSection />
        <CtaBanner
          onOpenDemo={handleOpenDemo}
          onGetStarted={handleGetStarted}
        />
      </main>

      <Footer />

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

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:id" element={<MemberDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
