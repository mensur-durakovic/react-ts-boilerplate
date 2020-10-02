import React from 'react';
type Props = { industryPrioritization: IIndustryPrioritization };

const Prioritization: React.FC<Props> = props => {
  const { externalShocks, sectorPriority } = props.industryPrioritization;
  return (
    <>
      <div className="market-prioritization">
        <div className="market-prioritization-title">Market prioritization</div>
        <div className="market-prioritization-line" />
      </div>
      <div className="market-prioritization-wrapper">
        <div className="market-prioritization-card">
          <div className="market-prioritization-card-green">
            <div className="market-prioritization-card-green-dot" />
            <div className="market-prioritization-card-green-line" />
          </div>
          <div className="market-prioritization-card-infos">
            <div className="market-prioritization-card-title">External shocks</div>
            <div className="market-prioritization-card-text">
              <span className="market-prioritization-card-text-bold">{externalShocks.name}</span>
              <span>&nbsp;{externalShocks.description}</span>
            </div>
          </div>
        </div>

        <div className="market-prioritization-card">
          <div className="market-prioritization-card-infos">
            <div className="market-prioritization-sector-subtitle">Sector priority</div>
            <div className="market-prioritization-sector-title">{sectorPriority.name}</div>
            <div className="market-prioritization-sector-text">{sectorPriority.description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prioritization;
