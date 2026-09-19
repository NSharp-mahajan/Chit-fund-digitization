import { useState } from 'react'
import { Show, RedirectToSignIn } from '@clerk/react'
import { mockDashboardData } from '@/data/dashboard'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { TopBar } from '@/components/dashboard/TopBar'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { SummaryCards } from '@/components/dashboard/SummaryCards'
import { CurrentAuctionCard } from '@/components/dashboard/CurrentAuctionCard'
import { CollectionOverviewCard } from '@/components/dashboard/CollectionOverviewCard'
import { PaymentStatusCard } from '@/components/dashboard/PaymentStatusCard'
import { RiskAlertsCard } from '@/components/dashboard/RiskAlertsCard'
import { RecentLedgerCard } from '@/components/dashboard/RecentLedgerCard'

export default function DashboardPage() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const data = mockDashboardData

  return (
    <>
      <Show when="signed-in">
        <div className="flex min-h-screen bg-background text-foreground antialiased">
          {/* Sidebar Navigation */}
          <Sidebar
            mobileOpen={mobileSidebarOpen}
            onCloseMobile={() => setMobileSidebarOpen(false)}
          />

          {/* Main Layout Area */}
          <div className="flex flex-1 flex-col overflow-x-hidden min-w-0">
            {/* Top Bar Header */}
            <TopBar
              groupName={data.groupName}
              currentCycle={data.currentCycle}
              totalCycles={data.totalCycles}
              onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
            />

            {/* Dashboard Content Workspace */}
            <main className="flex-1 space-y-6 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
              {/* Header Context & Quick Actions Bar */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-navy">
                    Organizer Control Center
                  </h2>
                  <p className="mt-1 text-xs text-muted sm:text-sm">
                    Real-time status of capital collections, reverse auctions, ledger integrity, and AI risk telemetry.
                  </p>
                </div>

                <QuickActions />
              </div>

              {/* 5 Core Summary Cards */}
              <SummaryCards stats={data.summaryStats} />

              {/* Primary Grid: Current Auction & Collections & Payment Status */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <CurrentAuctionCard auction={data.currentAuction} />
                </div>
                <div className="grid grid-cols-1 gap-6 lg:col-span-5 sm:grid-cols-2 lg:grid-cols-1">
                  <CollectionOverviewCard collection={data.collectionOverview} />
                  <PaymentStatusCard status={data.paymentStatus} />
                </div>
              </div>

              {/* Secondary Grid: AI Risk Alerts & Recent Activity / Ledger */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <RiskAlertsCard alerts={data.riskAlerts} />
                </div>
                <div className="lg:col-span-7">
                  <RecentLedgerCard transactions={data.recentTransactions} />
                </div>
              </div>
            </main>
          </div>
        </div>
      </Show>

      <Show when="signed-out">
        <RedirectToSignIn />
      </Show>
    </>
  )
}
