import './MemberStats.css';

const CARD_META = {
  'Total Members':      { icon: '👥', accent: 'blue',  trend: '+3 this month' },
  'Total Contributions':{ icon: '💰', accent: 'green', trend: '₹1.2L this cycle' },
  'Pending Payments':   { icon: '⏳', accent: 'amber', trend: '6 members overdue' },
  'Risk Alerts':        { icon: '⚠️', accent: 'red',   trend: '3 critical' },
};

export function MemberStats({ summary }) {
  const cards = [
    { label: 'Total Members',       value: summary.totalMembers },
    { label: 'Total Contributions', value: summary.totalContributions },
    { label: 'Pending Payments',    value: summary.pendingPayments },
    { label: 'Risk Alerts',         value: summary.riskAlerts },
  ];

  return (
    <div className="member-stats-grid">
      {cards.map((card) => {
        const meta = CARD_META[card.label];
        return (
          <div key={card.label} className={`member-stat-card member-stat-card--${meta.accent}`}>
            <div className="member-stat-card__top">
              <span className="member-stat-card__icon-wrap" aria-hidden="true">
                {meta.icon}
              </span>
              <span className="member-stat-card__label">{card.label}</span>
            </div>
            <p className="member-stat-card__value">{card.value}</p>
            <p className="member-stat-card__trend">{meta.trend}</p>
          </div>
        );
      })}
    </div>
  );
}
