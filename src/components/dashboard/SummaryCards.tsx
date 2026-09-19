import { Users, Wallet, Layers, Clock, ShieldAlert } from 'lucide-react'
import type { SummaryStat } from '@/data/dashboard'

interface SummaryCardsProps {
  stats: SummaryStat[]
}

const iconMap = {
  users: Users,
  wallet: Wallet,
  layers: Layers,
  clock: Clock,
  shieldAlert: ShieldAlert,
}

export function SummaryCards({ stats }: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
      {stats.map((stat) => {
        const Icon = iconMap[stat.iconName]
        const isRisk = stat.id === 'risk-alerts'
        const isPending = stat.id === 'pending-payments'

        return (
          <article
            key={stat.id}
            className="flex flex-col justify-between rounded-[14px] border border-border bg-card p-4 shadow-(--shadow-card) transition-all hover:border-border/80"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[12px] font-semibold text-muted">
                {stat.label}
              </span>
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  isRisk
                    ? 'bg-amber-500/10 text-amber-600'
                    : isPending
                    ? 'bg-indigo-500/10 text-indigo-600'
                    : 'bg-emerald/10 text-emerald'
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold tracking-tight text-navy">
                  {stat.value}
                </span>
              </div>
              <p
                className={`mt-1 text-[11px] font-medium ${
                  isRisk
                    ? 'text-amber-600 font-semibold'
                    : 'text-muted-foreground'
                }`}
              >
                {stat.supportingText}
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
