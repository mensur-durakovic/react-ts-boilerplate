import React from 'react';
type Props = {};

const IndustryRisk: React.FC<Props> = () => (
  <div className="market-industry-risk">
    <div className="market-industry-risk-green" />
    <div className="market-industry-risk-infos">
      <div className="market-industry-risk-infos-text">
        <span className="market-industry-risk-infos-text-bold">Industry</span>
        <span>risk</span>
      </div>
      <div className="market-industry-risk-infos-comments">No comments</div>
    </div>
    <div className="market-industry-risk-button">Low risk</div>
  </div>
);

export default IndustryRisk;
