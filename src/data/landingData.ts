export interface MetricStat {
  value: string;
  label: string;
  isIllustrative?: boolean;
}

export interface ComplianceItem {
  id: string;
  text: string;
}

export interface ProblemCardItem {
  icon: string;
  title: string;
  description: string;
  badge: string;
}

export interface FeatureCardItem {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  tagColor?: string;
}

export interface WorkflowStep {
  step: number;
  stepLabel: string;
  title: string;
  description: string;
  illustrativeTag: string;
  roleBadge: 'Organiser' | 'Both' | 'Members';
}

export interface RoleResponsibility {
  role: string;
  roleType: 'organiser' | 'member';
  badge: string;
  subtitle: string;
  summary: string;
  responsibilities: string[];
}

export interface BehavioralSignal {
  id: string;
  icon: string;
  title: string;
  detail: string;
  severity: 'high' | 'medium' | 'low';
}

export interface TxnEvent {
  id: string;
  code: string;
  member: string;
  type: 'deposit' | 'payout';
  amount: string;
  status: string;
  timeAgo: string;
}

export const STATS_DATA: MetricStat[] = [
  {
    value: '₹140Cr+',
    label: 'Chit Capital Supervised (Illustrative Prototype)',
    isIllustrative: true,
  },
  {
    value: '99.4%',
    label: 'On-Time Collection Velocity',
  },
  {
    value: '100%',
    label: 'Tamper-Evident Ledger Integrity',
  },
  {
    value: '12,000+',
    label: 'Active Chit Members (Sample Volume)',
    isIllustrative: true,
  },
];

export const COMPLIANCE_ITEMS: ComplianceItem[] = [
  {
    id: 'foreman',
    text: 'Authorized Foreman Association Standard',
  },
  {
    id: 'registrar',
    text: 'State Chit Registrar Compliant Architecture',
  },
  {
    id: 'encryption',
    text: 'Bank-Grade AES-256 Cloud Vault Encryption',
  },
];

export const PROBLEM_CARDS: ProblemCardItem[] = [
  {
    icon: 'ReceiptText',
    title: 'Manual & Fragile Records',
    description:
      'Lost physical diaries, corrupted local spreadsheets, and hours spent recalculating monthly dividend deductions by hand before each auction cycle.',
    badge: '× HIGH RISK OF HUMAN ERROR',
  },
  {
    icon: 'FileQuestion',
    title: 'Unclear & Disputed Transactions',
    description:
      'Unverified UPI screenshots dumped into chat groups, offline cash ambiguity, and zero real-time transparency for members on who has actually cleared dues.',
    badge: '× DISPUTED PAYMENT TIMESTAMPS',
  },
  {
    icon: 'ShieldAlert',
    title: 'Blind-Spot Risk Monitoring',
    description:
      "No early warnings when a member's solvency slips, leaving organizers blindsided when a member defaults right after claiming a high-value chit prize.",
    badge: '× POST-PRIZE RECOVERY DEFAULTS',
  },
];

export const FEATURE_CARDS: FeatureCardItem[] = [
  {
    icon: 'BookOpenCheck',
    title: 'Digital Ledger',
    description:
      'Every contribution, penalty, and payout is immutably timestamped with tamper-evident cryptographic hash seals compliant with Indian evidence laws.',
    linkText: 'Audit-ready export',
    tagColor: 'emerald',
  },
  {
    icon: 'Gavel',
    title: 'Smart Auctions',
    description:
      'Conduct reverse auctions with real-time sealed bidding, instant dividend calculation, and automated winner prize disbursement workflows.',
    linkText: 'Sealed & open modes',
    tagColor: 'indigo',
  },
  {
    icon: 'Users',
    title: 'Member Management',
    description:
      'Digital KYC, Aadhaar & phone verification, automated WhatsApp reminders, and individual solvency payment timelines.',
    linkText: 'Automated WhatsApp CRM',
    tagColor: 'blue',
  },
  {
    icon: 'Cpu',
    title: 'AI Risk Monitoring',
    description:
      'Non-judgmental behavioral pattern detection that spots overdue cycles, abnormal bid aggression, and liquidity anomalies before default.',
    linkText: 'Explainable Scoring',
    tagColor: 'teal',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    stepLabel: 'STEP 1',
    title: 'Create a Savings Group',
    description:
      'The organiser creates a group, configures the contribution amount, cycle duration, member list, and auction rules.',
    illustrativeTag: '₹5L Pool • 25 Cycles • Rules Set',
    roleBadge: 'Organiser',
  },
  {
    step: 2,
    stepLabel: 'STEP 2',
    title: 'Record Contributions',
    description:
      'Members can view their contribution status. The organiser records payments, and the ledger displays transaction history and outstanding dues.',
    illustrativeTag: 'Payment Status • Ledger History',
    roleBadge: 'Both',
  },
  {
    step: 3,
    stepLabel: 'STEP 3',
    title: 'Conduct the Auction',
    description:
      'The organiser starts an auction. Members submit bids, the winning bid is determined according to the configured rules, and the payout calculation is displayed transparently.',
    illustrativeTag: 'Sealed Bids • Dividend Split',
    roleBadge: 'Both',
  },
  {
    step: 4,
    stepLabel: 'STEP 4',
    title: 'Verify and Close the Cycle',
    description:
      'The organiser reviews the payout, confirms the transaction, and closes the cycle. Members can inspect the ledger and the history of completed cycles.',
    illustrativeTag: 'Audit Trail • Prize Disbursal',
    roleBadge: 'Both',
  },
];

export const USER_ROLES: RoleResponsibility[] = [
  {
    role: 'ORGANISER',
    roleType: 'organiser',
    badge: 'CHIEF FOREMAN & OPERATORS',
    subtitle: 'Full administrative control with cryptographic compliance',
    summary: 'Orchestrates group lifecycle, records contributions, and conducts fair auctions.',
    responsibilities: [
      'Creates and manages savings groups.',
      'Records contributions and manages member records.',
      'Configures auction rules and reviews payouts.',
      'Reviews risk alerts and decides what action to take.',
    ],
  },
  {
    role: 'MEMBER',
    roleType: 'member',
    badge: 'SUBSCRIBERS & PARTICIPANTS',
    subtitle: 'Transparent passbook with real-time auditability',
    summary: 'Tracks dues, reviews ledger entries, and places bids with complete visibility.',
    responsibilities: [
      'Views contribution history and outstanding dues.',
      'Checks auction information and payout records.',
      'Reviews group transactions and payment status.',
      'Receives relevant reminders and notifications.',
    ],
  },
];

export const BEHAVIORAL_SIGNALS: BehavioralSignal[] = [
  {
    id: 'sig-1',
    icon: 'Clock',
    title: '2 late payments in Cycles 6 & 7',
    detail: 'Average 6.4 days post-due lag observed relative to group average.',
    severity: 'high',
  },
  {
    id: 'sig-2',
    icon: 'TrendingDown',
    title: 'Bid aggression spike in Cycle 7',
    detail: 'Submitted extreme discount bid while installment balance was still marked unpaid.',
    severity: 'medium',
  },
  {
    id: 'sig-3',
    icon: 'FileText',
    title: 'Surety verification pending update',
    detail: 'Employer payroll verification document dispatch overdue by 14 days.',
    severity: 'medium',
  },
];

export const RECENT_TXNS: TxnEvent[] = [
  {
    id: 'txn-1',
    code: 'TXN-0842',
    member: 'Arvind Kulkarni',
    type: 'deposit',
    amount: '+₹10,000',
    status: 'Verified ✓',
    timeAgo: '4m ago',
  },
  {
    id: 'txn-2',
    code: 'TXN-0789',
    member: 'Sanjay Nair (Prize)',
    type: 'payout',
    amount: '-₹3,95,000',
    status: 'Disbursed ✓',
    timeAgo: '18m ago',
  },
];
