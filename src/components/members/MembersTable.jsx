import { useNavigate } from 'react-router-dom';
import './MembersTable.css';

function StatusBadge({ status }) {
  const map = {
    Paid:    'badge badge--paid',
    Pending: 'badge badge--pending',
    Overdue: 'badge badge--overdue',
  };
  return <span className={map[status] || 'badge'}>{status}</span>;
}

function RiskBadge({ risk }) {
  const map = {
    Low:    'badge badge--low',
    Medium: 'badge badge--medium',
    High:   'badge badge--high',
  };
  return (
    <span className={map[risk] || 'badge'}>
      <span className={`badge__dot badge__dot--${risk.toLowerCase()}`} aria-hidden="true" />
      {risk}
    </span>
  );
}

export function MembersTable({ members }) {
  const navigate = useNavigate();

  if (members.length === 0) {
    return (
      <div className="members-table-empty">
        <div className="members-table-empty__icon" aria-hidden="true">🔍</div>
        <p className="members-table-empty__title">No members found</p>
        <p className="members-table-empty__sub">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="members-table-wrap">
      <table className="members-table">
        <thead>
          <tr>
            <th>Member</th>
            <th>ID</th>
            <th>Contributed</th>
            <th>Pending</th>
            <th>Payment Status</th>
            <th>Risk Level</th>
            <th className="members-table__th-center">Auctions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr
              key={m.id}
              className="members-table__row"
              onClick={() => navigate(`/members/${m.id}`)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/members/${m.id}`)}
              aria-label={`View details for ${m.name}`}
            >
              <td>
                <div className="members-table__member-cell">
                  <span className="members-table__avatar">{m.avatar}</span>
                  <div>
                    <p className="members-table__name">{m.name}</p>
                    <p className="members-table__email">{m.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <span className="members-table__id">{m.id}</span>
              </td>
              <td>
                <span className="members-table__amount">
                  {m.contributed.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                </span>
              </td>
              <td>
                {m.pending === 0
                  ? <span className="members-table__nil">—</span>
                  : <span className="members-table__amount members-table__amount--pending">
                      {m.pending.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                    </span>
                }
              </td>
              <td><StatusBadge status={m.paymentStatus} /></td>
              <td><RiskBadge risk={m.risk} /></td>
              <td className="members-table__auctions-cell">
                <span className="members-table__auction-badge">{m.auctions}</span>
              </td>
              <td>
                <button
                  className="members-table__view-btn"
                  onClick={(e) => { e.stopPropagation(); navigate(`/members/${m.id}`); }}
                  type="button"
                  aria-label={`View details for ${m.name}`}
                >
                  View
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
