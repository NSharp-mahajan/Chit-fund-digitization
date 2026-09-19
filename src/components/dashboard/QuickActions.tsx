import { useState } from 'react'
import { UserPlus, CreditCard, Gavel, X, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function QuickActions() {
  const [activeNotice, setActiveNotice] = useState<string | null>(null)

  const handleAction = (actionName: string) => {
    setActiveNotice(`${actionName} modal flow prepared — connecting to live ledger API in upcoming cycle update.`)
  }

  return (
    <div className="space-y-3">
      {activeNotice && (
        <div className="flex items-center justify-between gap-3 rounded-[12px] border border-emerald/20 bg-emerald/10 px-4 py-3 text-xs font-semibold text-emerald-dark animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald" />
            <span>{activeNotice}</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveNotice(null)}
            className="rounded p-0.5 text-emerald-dark hover:bg-emerald/20"
            aria-label="Dismiss notice"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2.5">
        <Button
          onClick={() => handleAction('Add Member')}
          variant="outline"
          size="sm"
          className="h-9 gap-2 rounded-[10px] text-xs font-semibold"
        >
          <UserPlus className="h-3.5 w-3.5 text-emerald" />
          Add Member
        </Button>

        <Button
          onClick={() => handleAction('Record Payment')}
          variant="default"
          size="sm"
          className="h-9 gap-2 rounded-[10px] text-xs font-semibold"
        >
          <CreditCard className="h-3.5 w-3.5" />
          Record Payment
        </Button>

        <Button
          onClick={() => handleAction('Run Auction')}
          variant="navy"
          size="sm"
          className="h-9 gap-2 rounded-[10px] text-xs font-semibold"
        >
          <Gavel className="h-3.5 w-3.5" />
          Run Auction
        </Button>
      </div>
    </div>
  )
}
