import { Gavel, TrendingDown, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import type { AuctionData } from '@/data/dashboard'

interface CurrentAuctionCardProps {
  auction: AuctionData
}

export function CurrentAuctionCard({ auction }: CurrentAuctionCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-[16px] border border-border bg-card p-5 shadow-(--shadow-card)">
      <div>
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-border">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-emerald/10 text-emerald">
              <Gavel className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-navy">Current Auction</h2>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2 py-0.5 text-[10px] font-bold text-emerald-dark uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
                  {auction.status}
                </span>
              </div>
              <p className="text-xs text-muted">
                Cycle {auction.cycle} of {auction.totalCycles} • Reverse Bidding
              </p>
            </div>
          </div>

          <Link to="/ledger">
            <Button size="sm" variant="default" className="gap-1.5 text-xs font-semibold">
              View Auction
            </Button>
          </Link>
        </div>

        {/* Metric Grid */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-[10px] border border-border bg-background p-3">
            <span className="text-[11px] font-semibold text-muted">Chit Amount</span>
            <p className="mt-1 text-base font-bold text-navy">{auction.chitAmount}</p>
          </div>
          <div className="rounded-[10px] border border-border bg-background p-3">
            <span className="text-[11px] font-semibold text-muted">Highest Bid</span>
            <p className="mt-1 text-base font-bold text-emerald-dark">{auction.currentHighestBid}</p>
          </div>
          <div className="rounded-[10px] border border-border bg-background p-3">
            <span className="text-[11px] font-semibold text-muted">Est. Dividend Payout</span>
            <p className="mt-1 text-base font-bold text-navy">{auction.estimatedPrizeAmount}</p>
          </div>
          <div className="rounded-[10px] border border-border bg-background p-3">
            <span className="text-[11px] font-semibold text-muted">Participants</span>
            <p className="mt-1 flex items-center gap-1 text-base font-bold text-navy">
              <Users className="h-3.5 w-3.5 text-muted" />
              {auction.participantsCount}
            </p>
          </div>
        </div>

        {/* Live Bids Feed */}
        <div className="mt-4">
          <div className="mb-2.5 flex items-center justify-between text-xs font-semibold text-muted">
            <span className="flex items-center gap-1">
              <TrendingDown className="h-3.5 w-3.5 text-emerald" />
              Live Bid Submissions
            </span>
            <span>Dividend Discount</span>
          </div>

          <ul className="space-y-2">
            {auction.recentBids.map((bid) => (
              <li
                key={bid.id}
                className="flex items-center justify-between rounded-[10px] border border-border/70 bg-background/60 px-3 py-2 text-xs transition-colors hover:bg-background"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white">
                    {bid.initials}
                  </span>
                  <div>
                    <span className="font-semibold text-navy">{bid.member}</span>
                    <span className="ml-2 text-[10px] text-muted-foreground">{bid.timeAgo}</span>
                  </div>
                </div>
                <span className="font-mono font-bold text-navy">{bid.bidAmount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
