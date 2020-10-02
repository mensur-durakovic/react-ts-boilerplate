import React from 'react';

import { Global, Home } from '@ant-design/icons';
type Props = { marketCompetition: ICompetition };

const Competition: React.FC<Props> = props => {
  const {
    internationalSupplier,
    localSupplier,
    localProducer,
    entryBarrier
  } = props.marketCompetition;
  return (
    <div className="market-competition">
      <div className="market-competition-title"> Competition</div>
      <div className="market-competition-card">
        <div className="market-competition-card-icon">
          <Global />
        </div>
        <div className="market-competition-card-infos">
          <div className="market-competition-card-title"> International suppliers</div>
          <div className="market-competition-card-text ">
            <span className="market-competition-card-text-bold">{internationalSupplier.name}</span>
            <span className="market-competition-card-text">
              &nbsp;{internationalSupplier.description}
            </span>
          </div>
        </div>
      </div>
      <div className="market-competition-card">
        <div className="market-competition-card-icon">
          <Home />
        </div>
        <div className="market-competition-card-infos">
          <div className="market-competition-card-title"> Local suppliers</div>
          <div className="market-competition-card-text ">
            <span className="market-competition-card-text-bold">{localSupplier.name}</span>
            <span className="market-competition-card-text">&nbsp;{localSupplier.description}</span>
          </div>
        </div>
      </div>
      <div className="market-competition-card-normal">
        <div className="market-competition-card-normal-green">
          <div className="market-competition-card-normal-green-dot" />
          <div className="market-competition-card-normal-green-line" />
        </div>
        <div className="market-competition-card-normal-infos">
          <div className="market-competition-card-normal-title">Local producers</div>
          <div className="market-competition-card-normal-text">
            <div className="market-competition-local">
              <div className="market-competition-local-title">Total annual capacity</div>
              <div className="market-competition-local-text">
                {localProducer.totalCapacity} {localProducer.units}
              </div>
            </div>
            <div className="market-competition-local">
              <div className="market-competition-local-title">Capacity utilization</div>
              <div className="market-competition-local-text">
                {localProducer.capacityUtilization}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="market-competition-divider" />
      <div className="market-competition-card-normal">
        <div className="market-competition-card-normal-green">
          <div className="market-competition-card-normal-green-dot" />
          <div className="market-competition-card-normal-green-line" />
        </div>
        <div className="market-competition-card-normal-infos">
          <div className="market-competition-card-normal-title">Entry barrier</div>
          <div className="market-competition-card-normal-text">
            <span className="market-competition-card-normal-text-bold">{entryBarrier.name}</span>
            <span>&nbsp;{entryBarrier.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;
