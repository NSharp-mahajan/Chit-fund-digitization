export const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'AI Risk Monitoring', href: '#ai-risk' },
  { label: 'About', href: '#about' },
] as const

export const heroContent = {
  badge: 'NEXT-GEN CHIT FUND & SAVINGS OS • AUDIT & TAMPER-EVIDENT',
  heading: 'Make Every Savings Group More Transparent.',
  supporting:
    'ChitLedger digitizes member records, installment collections, reverse auctions, and payouts — with a tamper-evident ledger and AI risk monitoring that keeps every cycle accountable.',
  primaryCta: 'Get Started',
  secondaryCta: 'View Product Demo',
  trustIndicators: [
    'SOC 2 Type II',
    'Encrypted at rest',
    '99.99% uptime',
  ],
} as const

export const stats = [
  { value: '₹140Cr+', label: 'Chit Capital Supervised' },
  { value: '99.4%', label: 'On-Time Collection Velocity' },
  { value: '100%', label: 'Tamper-Evident Ledger Integrity' },
  { value: '12,000+', label: 'Active Chit Members' },
] as const

export const complianceItems = [
  'RBI-aligned structured products',
  'ISO 27001 controls',
  'Tamper-evident journaling',
] as const

export const dashboardPreview = {
  groupName: 'Chennai Gold Chit',
  series: 'Series 24',
  totalPool: '₹48,00,000',
  collection: { collected: 18, expected: 20, label: 'Members Paid' },
  risk: { value: '12.4%', label: 'Default Probability' },
  auction: {
    status: 'Live',
    bids: [
      { initials: 'PK', member: 'Priya Krishnan', bid: '8.2% Bid' },
      { initials: 'AM', member: 'Arun Mehta', bid: '7.4% Bid' },
      { initials: 'MI', member: 'Meera Iyer', bid: '6.9% Bid' },
    ],
  },
  activity: [
    { time: '09:42 AM', text: 'Cycle 14 Collection Confirmed' },
    { time: '09:18 AM', text: 'Bid sealed — Priya K.' },
    { time: '08:51 AM', text: 'Hash committed to ledger' },
  ],
  integrityHash: '0x8f2…a91',
} as const
