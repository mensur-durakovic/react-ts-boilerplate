import React from 'react';

import SriLankaFlag from '../../../../assets/sri-lanka.svg';
import QatarFlag from '../../../../assets/qatar.svg';
import { LineChart } from '@ant-design/icons';
type Props = {
  marketOverview: IMarketOverview;
};

const Overview: React.FC<Props> = props => {
  console.log(props);
  const {
    size,
    units,
    geography,
    geographyScope,
    qatarScope,
    volatilityDemand,
    marketStage,
    EBITDA,
    mecSensitive
  } = props.marketOverview;

  return (
    <div className="market-overview">
      <div className="market-overview-column">
        <span className="market-overview-title">Market Overview</span>
        <div className="market-overview-column-divider" />
        <div className="market-overview-size">
          <span className="market-overview-size-title">Product market size</span>
          <span className="market-overview-size-tons">
            {parseInt(size).toLocaleString()} {units}
          </span>
        </div>
        <div className="market-overview-geo">
          <div className="market-overview-geo-title">Market geography scope</div>
          <div className="market-overview-geo-box">
            <img src={SriLankaFlag} alt="sri lanka flag" />
            <span className="market-overview-geo-box-country">{geography}:</span>
            <span className="market-overview-geo-box-percentage">{geographyScope}</span>
          </div>
          <div className="market-overview-geo-box">
            <img src={QatarFlag} alt="qatar flag" />
            <span className="market-overview-geo-box-country">Qatar:</span>
            <span className="market-overview-geo-box-percentage">{qatarScope}</span>
          </div>
        </div>
        <div className="market-overview-card">
          <div className="market-overview-card-green">
            <div className="market-overview-card-green-dot" />
            <div className="market-overview-card-green-line" />
          </div>
          <div className="market-overview-card-infos">
            <div className="market-overview-card-title"> Volatility of demand</div>
            <div className="market-overview-card-text market-overview-volatility">
              {volatilityDemand}
            </div>
          </div>
        </div>
      </div>
      <div className="market-overview-column">
        <div className="market-overview-card">
          <div className="market-overview-card-infos">
            <div className="market-overview-stage-subtitle"> Market stage </div>
            <div className="market-overview-stage-title"> {marketStage.name} </div>
            <div className="market-overview-stage-graph">
              <LineChart className="market-overview-stage-graph-icon" />
              <div className="market-overview-stage-graph-text">{marketStage.description}</div>
            </div>
          </div>
        </div>
        <div className="market-overview-card">
          <div className="market-overview-card-green">
            <div className="market-overview-card-green-dot" />
            <div className="market-overview-card-green-line" />
          </div>
          <div className="market-overview-card-infos">
            <div className="market-overview-ebi">
              <div className="market-overview-ebi-title">
                EBITDA margins for local producers in the industry
              </div>
              <div className="market-overview-ebi-text">{EBITDA}</div>
            </div>
          </div>
        </div>
        <div className="market-overview-card">
          <div className="market-overview-card-green">
            <div className="market-overview-card-green-dot" />
            <div className="market-overview-card-green-line" />
          </div>
          <div className="market-overview-card-infos">
            <div className="market-overview-card-title">
              Is the companies core revenue sensitive to change in macro economic condition?
            </div>
            <div className="market-overview-card-text">
              <span className="market-overview-card-text-bold">{mecSensitive.name}</span>
              <span>&nbsp;{mecSensitive.description} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
