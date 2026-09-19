import { useState } from 'react';
import './RiskCard.css';

function getRiskColor(risk) {
  if (risk === 'Low') return 'low';
  if (risk === 'Medium') return 'medium';
  return 'high';
}

export function RiskCard({ member }) {
  const [showAI, setShowAI] = useState(false);
  const color = getRiskColor(member.risk);

  return (
    <section className="risk-card">
      <div className="risk-card__header">
        <div className="risk-card__title-row">
          <span className="risk-card__ai-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </span>
          <h3 className="risk-card__title">AI Risk Monitoring</h3>
        </div>
        <button
          className="risk-card__explain-btn"
          type="button"
          onClick={() => setShowAI(true)}
        >
          Explain Risk with AI
        </button>
      </div>

      <div className="risk-card__body">
        <div className="risk-card__score-row">
          <div>
            <p className="risk-card__score-label">Risk Level</p>
            <span className={`risk-card__level risk-card__level--${color}`}>{member.risk}</span>
          </div>
          <div className="risk-card__score-block">
            <p className="risk-card__score-label">Risk Score</p>
            <p className={`risk-card__score risk-card__score--${color}`}>{member.riskScore} <span className="risk-card__score-max">/ 100</span></p>
          </div>
        </div>

        <div className="risk-card__bar-wrap">
          <div className="risk-card__bar-track">
            <div
              className={`risk-card__bar-fill risk-card__bar-fill--${color}`}
              style={{ width: `${member.riskScore}%` }}
              role="progressbar"
              aria-valuenow={member.riskScore}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <p className="risk-card__bar-labels">
            <span>Low risk</span><span>High risk</span>
          </p>
        </div>

        <div className="risk-card__reasons">
          <p className="risk-card__reasons-title">Key Signals</p>
          <ul className="risk-card__reasons-list">
            {member.riskReasons.map((r, i) => (
              <li key={i} className="risk-card__reason-item">
                <span className={`risk-card__reason-dot risk-card__reason-dot--${color}`} aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showAI && (
        <div className="risk-card__modal-backdrop" onClick={() => setShowAI(false)} role="dialog" aria-modal="true" aria-labelledby="ai-modal-title">
          <div className="risk-card__modal" onClick={(e) => e.stopPropagation()}>
            <div className="risk-card__modal-header">
              <div className="risk-card__modal-title-row">
                <span className="risk-card__ai-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </span>
                <h4 id="ai-modal-title" className="risk-card__modal-title">AI Explanation</h4>
              </div>
              <button className="risk-card__modal-close" type="button" onClick={() => setShowAI(false)} aria-label="Close AI explanation">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="risk-card__modal-body">
              <div className={`risk-card__modal-level risk-card__modal-level--${color}`}>
                Risk Level: <strong>{member.risk}</strong> &nbsp;·&nbsp; Score: <strong>{member.riskScore}/100</strong>
              </div>
              <p className="risk-card__modal-text">{member.aiRiskExplanation}</p>
              <p className="risk-card__modal-disclaimer">
                ⓘ This explanation is generated from mock data for demonstration purposes only. No external AI service was called.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
