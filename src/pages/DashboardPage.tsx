import { Show, RedirectToSignIn } from '@clerk/react';
import { Navbar } from '@/components/landing/Navbar';

export default function DashboardPage() {
  return (
    <>
      <Show when="signed-in">
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="mx-auto max-w-6xl px-5 py-10">
            <h1 className="text-3xl font-bold text-navy">Dashboard</h1>
            <p className="mt-4 text-muted">Welcome to your ChitLedger dashboard.</p>
          </main>
        </div>
      </Show>
      <Show when="signed-out">
        <RedirectToSignIn />
      </Show>
    </>
  );
}
