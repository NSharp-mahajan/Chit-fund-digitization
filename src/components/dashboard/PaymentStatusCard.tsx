import { CheckCircle2, Clock, AlertCircle } from 'lucide-react'
import type { PaymentStatusData } from '@/data/dashboard'

interface PaymentStatusCardProps {
  status: PaymentStatusData
}

export function PaymentStatusCard({ status }: PaymentStatusCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-[16px] border border-border bg-card p-5 shadow-(--shadow-card)">
      <div>
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-border">
          <div>
            <h3 className="text-base font-bold text-navy">Payment Status</h3>
            <p className="text-xs text-muted">Cycle 8 member contribution breakdown</p>
          </div>
          <span className="text-xs font-bold text-navy">
            {status.totalMembers} Total Members
          </span>
        </div>

        {/* Multi-segmented Progress Bar */}
        <div className="mt-4">
          <div className="flex h-3 w-full overflow-hidden rounded-full bg-border p-0.5 gap-0.5">
            <div
              className="h-full rounded-l-full bg-emerald transition-all"
              style={{ width: `${status.paidPercentage}%` }}
              title={`Paid: ${status.paidCount} members (${status.paidPercentage}%)`}
            />
            <div
              className="h-full bg-amber-500 transition-all"
              style={{ width: `${status.pendingPercentage}%` }}
              title={`Pending: ${status.pendingCount} members (${status.pendingPercentage}%)`}
            />
            <div
              className="h-full rounded-r-full bg-rose-500 transition-all"
              style={{ width: `${status.overduePercentage}%` }}
              title={`Overdue: ${status.overdueCount} member (${status.overduePercentage}%)`}
            />
          </div>
        </div>

        {/* Status Items */}
        <div className="mt-5 space-y-2.5">
          <div className="flex items-center justify-between rounded-[10px] border border-border/80 bg-background p-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </span>
              <div>
                <span className="font-bold text-navy">Paid</span>
                <span className="ml-2 text-muted-foreground">{status.paidCount} members</span>
              </div>
            </div>
            <span className="font-mono font-bold text-emerald-dark">
              {status.paidPercentage.toFixed(1)}%
            </span>
          </div>

          <div className="flex items-center justify-between rounded-[10px] border border-border/80 bg-background p-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                <Clock className="h-3.5 w-3.5" />
              </span>
              <div>
                <span className="font-bold text-navy">Pending</span>
                <span className="ml-2 text-muted-foreground">{status.pendingCount} members</span>
              </div>
            </div>
            <span className="font-mono font-bold text-amber-600">
              {status.pendingPercentage.toFixed(1)}%
            </span>
          </div>

          <div className="flex items-center justify-between rounded-[10px] border border-border/80 bg-background p-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500/10 text-rose-600">
                <AlertCircle className="h-3.5 w-3.5" />
              </span>
              <div>
                <span className="font-bold text-navy">Overdue</span>
                <span className="ml-2 text-muted-foreground">{status.overdueCount} member</span>
              </div>
            </div>
            <span className="font-mono font-bold text-rose-600">
              {status.overduePercentage.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
