import { useState, useMemo } from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { MemberStats } from '@/components/members/MemberStats';
import { MemberFilters } from '@/components/members/MemberFilters';
import { MembersTable } from '@/components/members/MembersTable';
import { AddMemberModal } from '@/components/members/AddMemberModal';
import { mockMembers, memberSummary } from '@/data/members';
import './Members.css';

const PAYMENT_OPTIONS = ['All', 'Paid', 'Pending', 'Overdue'];
const RISK_OPTIONS = ['All Risk', 'Low', 'Medium', 'High'];

export default function Members() {
  const [members, setMembers] = useState(mockMembers);
  const [search, setSearch] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('All');
  const [riskFilter, setRiskFilter] = useState('All Risk');
  const [showModal, setShowModal] = useState(false);

  const filteredMembers = useMemo(() => {
    return members.filter((m) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !q || m.name.toLowerCase().includes(q) || m.id.toLowerCase().includes(q);
      const matchesPayment =
        paymentFilter === 'All' || m.paymentStatus === paymentFilter;
      const matchesRisk =
        riskFilter === 'All Risk' || m.risk === riskFilter;
      return matchesSearch && matchesPayment && matchesRisk;
    });
  }, [members, search, paymentFilter, riskFilter]);

  // Count per filter for badge display
  const paymentCounts = useMemo(() => {
    const counts = { All: members.length };
    for (const m of members) {
      counts[m.paymentStatus] = (counts[m.paymentStatus] || 0) + 1;
    }
    return counts;
  }, [members]);

  const riskCounts = useMemo(() => {
    const counts = { 'All Risk': members.length };
    for (const m of members) {
      counts[m.risk] = (counts[m.risk] || 0) + 1;
    }
    return counts;
  }, [members]);

  function handleAddMember(newMember) {
    setMembers((prev) => [newMember, ...prev]);
  }

  const dynamicSummary = {
    ...memberSummary,
    totalMembers: members.length,
  };

  const isFiltered =
    search !== '' || paymentFilter !== 'All' || riskFilter !== 'All Risk';

  return (
    <div className="members-page">
      <Navbar />
      <main className="members-page__main">
        <div className="members-page__container">

          {/* ── Breadcrumb ── */}
          <nav className="members-page__breadcrumb" aria-label="Breadcrumb">
            <span>ChitLedger</span>
            <span className="members-page__breadcrumb-sep" aria-hidden="true">/</span>
            <span className="members-page__breadcrumb-current">Member Management</span>
          </nav>

          {/* ── Page header ── */}
          <div className="members-page__header">
            <div className="members-page__header-left">
              <h1 className="members-page__title">Member Management</h1>
              <p className="members-page__subtitle">
                Track members, contributions, payments and financial risk.
              </p>
            </div>
            <button
              className="members-page__add-btn"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add Member
            </button>
          </div>

          {/* ── Summary cards ── */}
          <MemberStats summary={dynamicSummary} />

          {/* ── Filter bar ── */}
          <div className="members-page__toolbar">
            {/* Search */}
            <div className="members-page__search-wrap">
              <span className="members-page__search-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                className="members-page__search"
                type="text"
                placeholder="Search by name or member ID…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search members"
              />
              {search && (
                <button
                  className="members-page__search-clear"
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            {/* Payment status filters */}
            <div className="members-page__filter-group" role="group" aria-label="Filter by payment status">
              {PAYMENT_OPTIONS.map((f) => (
                <button
                  key={f}
                  className={`members-page__filter-btn${paymentFilter === f ? ' members-page__filter-btn--active' : ''}`}
                  onClick={() => setPaymentFilter(f)}
                  type="button"
                >
                  {f}
                  <span className="members-page__filter-count">{paymentCounts[f] ?? 0}</span>
                </button>
              ))}
            </div>

            {/* Risk filters */}
            <div className="members-page__filter-group" role="group" aria-label="Filter by risk level">
              {RISK_OPTIONS.map((f) => (
                <button
                  key={f}
                  className={`members-page__filter-btn${riskFilter === f ? ' members-page__filter-btn--active' : ''}`}
                  onClick={() => setRiskFilter(f)}
                  type="button"
                >
                  {f === 'All Risk' ? 'All' : f}
                  <span className="members-page__filter-count">{riskCounts[f === 'All Risk' ? 'All Risk' : f] ?? 0}</span>
                </button>
              ))}
            </div>

            {/* Clear filters */}
            {isFiltered && (
              <button
                className="members-page__clear-btn"
                type="button"
                onClick={() => { setSearch(''); setPaymentFilter('All'); setRiskFilter('All Risk'); }}
              >
                Clear filters
              </button>
            )}
          </div>

          {/* ── Results meta row ── */}
          <div className="members-page__meta-row">
            <p className="members-page__count">
              {isFiltered
                ? <><strong>{filteredMembers.length}</strong> result{filteredMembers.length !== 1 ? 's' : ''} of <strong>{members.length}</strong> members</>
                : <><strong>{members.length}</strong> members total</>
              }
            </p>
            <div className="members-page__risk-summary">
              <span className="members-page__risk-pill members-page__risk-pill--high">
                ⚠ {members.filter(m => m.risk === 'High').length} High Risk
              </span>
              <span className="members-page__risk-pill members-page__risk-pill--medium">
                {members.filter(m => m.risk === 'Medium').length} Medium
              </span>
            </div>
          </div>

          {/* ── Table ── */}
          <MembersTable members={filteredMembers} />

        </div>
      </main>

      {showModal && (
        <AddMemberModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddMember}
        />
      )}
    </div>
  );
}
