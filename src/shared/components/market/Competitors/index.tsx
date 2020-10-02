import React, { useState } from 'react';

import { OrderedList, Down, Up } from '@ant-design/icons';
type Props = {
  competitors: ICompetitor[];
};

const Competitors: React.FC<Props> = props => {
  const [open, setOpen] = useState(false);
  const { competitors } = props;
  return (
    <div className="market-competition-competitors" onClick={() => setOpen(!open)}>
      <div className="market-competition-competitors-button">
        <div className="market-competition-competitors-icon">
          <OrderedList />
        </div>
        <div className="market-competition-competitors-text">View competitors list</div>
        <div className="market-competition-competitors-chevron">{open ? <Up /> : <Down />}</div>
      </div>
      {open && (
        <div className="market-competition-competitors-list">
          {competitors.map(c => (
            <div className="market-competition-competitors-list-item" key={c.name}>
              <div>{c.name}</div>
              <div>{c.geography}</div>
              <div>{c.marketShare}</div>
              <div>{c.totalAmount}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Competitors;
