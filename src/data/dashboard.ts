export interface SummaryStat {
  id: string
  label: string
  value: string
  supportingText: string
  change?: string
  iconName: 'users' | 'wallet' | 'layers' | 'clock' | 'shieldAlert'
}

export interface Bid {
  id: string
  initials: string
  member: string
  bidAmount: string
  timeAgo: string
}

export interface AuctionData {
  cycle: number
  totalCycles: number
  chitAmount: string
  participantsCount: number
  currentHighestBid: string
  estimatedPrizeAmount: string
  status: 'Live' | 'Ready' | 'Upcoming'
  recentBids: Bid[]
}

export interface CollectionData {
  collectedAmount: string
  collectedRaw: number
  pendingAmount: string
  pendingRaw: number
  totalTarget: string
  percentage: number
  trend: { label: string; collected: number; pending: number }[]
}

export interface PaymentStatusData {
  paidCount: number
  paidPercentage: number
  pendingCount: number
  pendingPercentage: number
  overdueCount: number
  overduePercentage: number
  totalMembers: number
}

export interface RiskAlert {
  id: string
  memberId: string
  memberName: string
  avatarInitials: string
  riskLevel: 'High' | 'Medium' | 'Low'
  reason: string
  timestamp: string
}

export interface Transaction {
  id: string
  date: string
  member: string
  activity: string
  type: 'contribution' | 'auction' | 'payout' | 'pending'
  amount: string
  status: 'Completed' | 'Pending' | 'Overdue' | 'Active'
}

export interface DashboardData {
  groupName: string
  currentCycle: number
  totalCycles: number
  summaryStats: SummaryStat[]
  currentAuction: AuctionData
  collectionOverview: CollectionData
  paymentStatus: PaymentStatusData
  riskAlerts: RiskAlert[]
  recentTransactions: Transaction[]
}

export const mockDashboardData: DashboardData = {
  groupName: 'Sharma Community Chit',
  currentCycle: 8,
  totalCycles: 12,

  summaryStats: [
    {
      id: 'total-members',
      label: 'Total Members',
      value: '12',
      supportingText: 'Active participants',
      iconName: 'users',
    },
    {
      id: 'total-collected',
      label: 'Total Collected',
      value: '₹5,42,000',
      supportingText: 'Across all 8 cycles',
      iconName: 'wallet',
    },
    {
      id: 'current-cycle',
      label: 'Current Cycle',
      value: '₹50,000',
      supportingText: 'Cycle 8 of 12 pool',
      iconName: 'layers',
    },
    {
      id: 'pending-payments',
      label: 'Pending Payments',
      value: '₹18,000',
      supportingText: '4 installments pending',
      iconName: 'clock',
    },
    {
      id: 'risk-alerts',
      label: 'Risk Alerts',
      value: '3',
      supportingText: 'Requires review',
      iconName: 'shieldAlert',
    },
  ],

  currentAuction: {
    cycle: 8,
    totalCycles: 12,
    chitAmount: '₹50,000',
    participantsCount: 12,
    currentHighestBid: '₹8,000',
    estimatedPrizeAmount: '₹42,000',
    status: 'Live',
    recentBids: [
      { id: 'b1', initials: 'RS', member: 'Rahul Sharma', bidAmount: '₹8,000', timeAgo: '4 mins ago' },
      { id: 'b2', initials: 'AM', member: 'Amit Malhotra', bidAmount: '₹7,500', timeAgo: '12 mins ago' },
      { id: 'b3', initials: 'SR', member: 'Sunita Rao', bidAmount: '₹6,800', timeAgo: '25 mins ago' },
      { id: 'b4', initials: 'VP', member: 'Vikram Patel', bidAmount: '₹6,000', timeAgo: '40 mins ago' },
    ],
  },

  collectionOverview: {
    collectedAmount: '₹32,000',
    collectedRaw: 32000,
    pendingAmount: '₹18,000',
    pendingRaw: 18000,
    totalTarget: '₹50,000',
    percentage: 64,
    trend: [
      { label: 'W1', collected: 10000, pending: 40000 },
      { label: 'W2', collected: 18000, pending: 32000 },
      { label: 'W3', collected: 25000, pending: 25000 },
      { label: 'W4', collected: 32000, pending: 18000 },
    ],
  },

  paymentStatus: {
    paidCount: 8,
    paidPercentage: 66.7,
    pendingCount: 3,
    pendingPercentage: 25.0,
    overdueCount: 1,
    overduePercentage: 8.3,
    totalMembers: 12,
  },

  riskAlerts: [
    {
      id: 'risk-1',
      memberId: 'm-02',
      memberName: 'Aman Verma',
      avatarInitials: 'AV',
      riskLevel: 'Medium',
      reason: '2 late payments recorded in last 3 cycles',
      timestamp: 'Today, 09:30 AM',
    },
    {
      id: 'risk-2',
      memberId: 'm-05',
      memberName: 'Priya Singh',
      avatarInitials: 'PS',
      riskLevel: 'High',
      reason: 'Repeated missed contribution pattern detected',
      timestamp: 'Yesterday',
    },
    {
      id: 'risk-3',
      memberId: 'm-09',
      memberName: 'Neha Kapoor',
      avatarInitials: 'NK',
      riskLevel: 'Medium',
      reason: 'Unusual payment timing and delayed confirmation',
      timestamp: '2 days ago',
    },
  ],

  recentTransactions: [
    {
      id: 'tx-1',
      date: '20 Sep 2026',
      member: 'Rahul Sharma',
      activity: 'Contribution',
      type: 'contribution',
      amount: '₹5,000',
      status: 'Completed',
    },
    {
      id: 'tx-2',
      date: '19 Sep 2026',
      member: 'Aman Verma',
      activity: 'Contribution',
      type: 'pending',
      amount: '₹5,000',
      status: 'Pending',
    },
    {
      id: 'tx-3',
      date: '18 Sep 2026',
      member: 'Rahul Sharma',
      activity: 'Auction Payout',
      type: 'payout',
      amount: '₹42,000',
      status: 'Completed',
    },
    {
      id: 'tx-4',
      date: '17 Sep 2026',
      member: 'Priya Singh',
      activity: 'Contribution',
      type: 'pending',
      amount: '₹5,000',
      status: 'Overdue',
    },
    {
      id: 'tx-5',
      date: '16 Sep 2026',
      member: 'Vikram Patel',
      activity: 'Contribution',
      type: 'contribution',
      amount: '₹5,000',
      status: 'Completed',
    },
    {
      id: 'tx-6',
      date: '15 Sep 2026',
      member: 'Neha Kapoor',
      activity: 'Contribution',
      type: 'contribution',
      amount: '₹5,000',
      status: 'Completed',
    },
    {
      id: 'tx-7',
      date: '15 Sep 2026',
      member: 'Sunita Rao',
      activity: 'Auction Bid',
      type: 'auction',
      amount: '₹8,000',
      status: 'Active',
    },
  ],
}
