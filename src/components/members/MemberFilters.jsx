import './MemberFilters.css';

const PAYMENT_FILTERS = ['All', 'Paid', 'Pending', 'Overdue'];
const RISK_FILTERS = ['All Risk', 'Low', 'Medium', 'High'];

export function MemberFilters({ search, onSearch, paymentFilter, onPaymentFilter, riskFilter, onRiskFilter }) {
  return (
    <div className="member-filters">
      <div className="member-filters__search-wrap">
        <span className="member-filters__search-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          className="member-filters__search"
          type="text"
          placeholder="Search by name or member ID..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          aria-label="Search members"
        />
      </div>

      <div className="member-filters__controls">
        <div className="member-filters__group" role="group" aria-label="Filter by payment status">
          {PAYMENT_FILTERS.map((f) => (
            <button
              key={f}
              className={`member-filters__btn${paymentFilter === f ? ' member-filters__btn--active' : ''}`}
              onClick={() => onPaymentFilter(f)}
              type="button"
            >
              {f}
            </button>
          ))}
        </div>

        <div className="member-filters__group" role="group" aria-label="Filter by risk level">
          {RISK_FILTERS.map((f) => (
            <button
              key={f}
              className={`member-filters__btn${riskFilter === f ? ' member-filters__btn--active' : ''}`}
              onClick={() => onRiskFilter(f)}
              type="button"
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
