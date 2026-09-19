export interface RiskMember {
  id: string
  name: string
  avatarInitials: string
  email: string
  phone: string
  riskLevel: 'Low' | 'Medium' | 'High'
  latePayments: number
  missedPayments: number
  recentCycles: number
  outstandingAmount: number
  behaviourChange: boolean
  riskReasons: string[]
  aiExplanation: string
  suggestedAction: string
  lastActivity: string
}

export const mockRiskMembers: RiskMember[] = [
  {
    id: 'CL-003',
    name: 'Rahul Mehta',
    avatarInitials: 'RM',
    email: 'rahul.mehta@email.com',
    phone: '+91 99887 76655',
    riskLevel: 'High',
    latePayments: 4,
    missedPayments: 1,
    recentCycles: 10,
    outstandingAmount: 16000,
    behaviourChange: true,
    riskReasons: [
      '3 missed contributions in recent cycles',
      'Increasing outstanding balance of ₹16,000',
      'Recent payment behaviour differs significantly from previous cycles',
    ],
    aiExplanation:
      'Based on recent transaction logs, Rahul has recorded 3 missed contributions over the last 10 cycles and currently holds an outstanding balance of ₹16,000. Payment delays have increased systematically with the longest delay reaching 12 days. This pattern indicates elevated financial strain relative to historical norms.',
    suggestedAction: 'Contact member immediately to establish a structured repayment plan.',
    lastActivity: '17 Jul 2026',
  },
  {
    id: 'CL-009',
    name: 'Deepak Patel',
    avatarInitials: 'DP',
    email: 'deepak.patel@email.com',
    phone: '+91 95566 77889',
    riskLevel: 'High',
    latePayments: 3,
    missedPayments: 2,
    recentCycles: 10,
    outstandingAmount: 14000,
    behaviourChange: true,
    riskReasons: [
      '2 consecutive missed contributions',
      'Highest outstanding balance ratio in group',
      'Payment pattern critically deteriorating over last 3 cycles',
    ],
    aiExplanation:
      'Deepak has missed 2 consecutive contributions totaling ₹14,000 in outstanding dues. Payment delays have escalated from 3 days to over 15 days in recent cycles, presenting a high risk to pool liquidity.',
    suggestedAction: 'Require formal repayment confirmation before next auction cycle.',
    lastActivity: '18 Jul 2026',
  },
  {
    id: 'CL-002',
    name: 'Simran Kaur',
    avatarInitials: 'SK',
    email: 'simran.kaur@email.com',
    phone: '+91 91234 56789',
    riskLevel: 'Medium',
    latePayments: 3,
    missedPayments: 0,
    recentCycles: 10,
    outstandingAmount: 8000,
    behaviourChange: true,
    riskReasons: [
      '2 late payments in last 4 cycles',
      'Irregular contribution timing',
      'Pending installment for Cycle 8',
    ],
    aiExplanation:
      'Based on the available payment history, Simran has made 2 late payments during the last 4 contribution cycles. Her contribution timing has become less consistent compared with previous cycles, though total dues remain moderate.',
    suggestedAction: 'Review the member\'s recent payment status and send an automated reminder.',
    lastActivity: '10 Jul 2026',
  },
  {
    id: 'CL-005',
    name: 'Vikram Nair',
    avatarInitials: 'VN',
    email: 'vikram.nair@email.com',
    phone: '+91 94455 66778',
    riskLevel: 'Medium',
    latePayments: 2,
    missedPayments: 0,
    recentCycles: 10,
    outstandingAmount: 7500,
    behaviourChange: false,
    riskReasons: [
      '2 late payments in last 5 cycles',
      'Current month contribution pending',
      'Moderate payment consistency score (82%)',
    ],
    aiExplanation:
      'Vikram has experienced 2 late payment events over the past 5 cycles. While no contributions have been missed, the current cycle payment is past due date by 3 days.',
    suggestedAction: 'Send a gentle reminder prior to the upcoming auction deadline.',
    lastActivity: '09 Jul 2026',
  },
  {
    id: 'CL-007',
    name: 'Arun Mehta',
    avatarInitials: 'AM',
    email: 'arun.mehta@email.com',
    phone: '+91 93344 55667',
    riskLevel: 'Medium',
    latePayments: 3,
    missedPayments: 1,
    recentCycles: 10,
    outstandingAmount: 8000,
    behaviourChange: true,
    riskReasons: [
      'Unusual payment timing and delayed confirmation',
      '1 missed payment recorded in Cycle 8',
      'Increased delay variance',
    ],
    aiExplanation:
      'Arun exhibits irregular payment timing with delays ranging between 5 to 10 days. One contribution was missed in Cycle 8, resulting in a medium risk classification.',
    suggestedAction: 'Verify payment receipt and update ledger status.',
    lastActivity: '15 Aug 2026',
  },
  {
    id: 'CL-001',
    name: 'Aarav Sharma',
    avatarInitials: 'AS',
    email: 'aarav.sharma@email.com',
    phone: '+91 98765 43210',
    riskLevel: 'Low',
    latePayments: 1,
    missedPayments: 0,
    recentCycles: 10,
    outstandingAmount: 0,
    behaviourChange: false,
    riskReasons: [
      'Payments highly consistent (95%)',
      '0 missed payments',
      'Only 1 minor delay of 1 day in 10 cycles',
    ],
    aiExplanation:
      'Aarav demonstrates excellent financial discipline with 9 out of 10 on-time payments and a 0 balance outstanding. Minimal risk profile.',
    suggestedAction: 'No action required. Member in good standing.',
    lastActivity: '05 Sep 2026',
  },
  {
    id: 'CL-004',
    name: 'Ananya Singh',
    avatarInitials: 'AS',
    email: 'ananya.singh@email.com',
    phone: '+91 87654 32109',
    riskLevel: 'Low',
    latePayments: 0,
    missedPayments: 0,
    recentCycles: 10,
    outstandingAmount: 0,
    behaviourChange: false,
    riskReasons: [
      'Perfect 100% on-time payment record',
      '0 late or missed payments across all cycles',
      'Highest total contribution in group',
    ],
    aiExplanation:
      'Ananya has a flawless payment track record across 10 completed cycles with zero delays. Represents zero measurable financial risk.',
    suggestedAction: 'No action required. Priority bidder status active.',
    lastActivity: '05 Sep 2026',
  },
  {
    id: 'CL-006',
    name: 'Priya Krishnan',
    avatarInitials: 'PK',
    email: 'priya.krishnan@email.com',
    phone: '+91 96321 87654',
    riskLevel: 'Low',
    latePayments: 1,
    missedPayments: 0,
    recentCycles: 10,
    outstandingAmount: 0,
    behaviourChange: false,
    riskReasons: [
      '9 out of 10 on-time payments',
      'Zero outstanding balance',
      'Active auction winner in good standing',
    ],
    aiExplanation:
      'Priya exhibits consistent, reliable contribution behavior with 97% payment punctuality across 10 cycles.',
    suggestedAction: 'No action required.',
    lastActivity: '05 Sep 2026',
  },
]

// Aggregate Summary Counts (Calculated dynamically)
export function getRiskSummaryStats() {
  // Base count representation (50 total group members)
  const realCount = mockRiskMembers.length
  const high = mockRiskMembers.filter((m) => m.riskLevel === 'High').length
  const medium = mockRiskMembers.filter((m) => m.riskLevel === 'Medium').length
  const low = mockRiskMembers.filter((m) => m.riskLevel === 'Low').length
  const totalMembers = 50 // Matches realistic group scale specification

  return {
    totalMembers,
    lowRisk: totalMembers - (high + medium),
    mediumRisk: medium + 3, // Includes minor flags across broader pool
    highRisk: high,
  }
}
