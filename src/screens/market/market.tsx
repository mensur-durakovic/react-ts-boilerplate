import React, { useEffect, useState } from 'react';
import Spinner from '../../shared/components/spinner';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDashboardData } from '@redux/actions';
import { ArrowLeft } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import IndustryRisk from '../../shared/components/market/IndustryRisk';
import Overview from '../../shared/components/market/Overview';
import Prioritization from '../../shared/components/market/Prioritization';
import Competition from '../../shared/components/market/Competition';
import Competitors from '../../shared/components/market/Competitors';

type Props = {};

const Market: React.FC<Props> = () => {
  const [fetching, setFetching] = useState(true);
  const dashboardData = useSelector((state: IReducerStates) => state.market);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setFetching(true);

      try {
        dispatch(fetchDashboardData());
      } catch (error) {
        console.error(error);
      }

      setFetching(false);
    })();
  }, [dispatch]);

  console.log('dashboardData', dashboardData);
  return (
    <div className="market">
      {fetching && <Spinner />}
      {!fetching && dashboardData.length > 0 && (
        <>
          <div className="market-back">
            <NavLink to="/dashboard">
              <ArrowLeft />
              <span className="market-back-text">Back to dashboard</span>
            </NavLink>
          </div>

          <IndustryRisk />

          <div className="market-wrapper">
            <div className="market-left">
              <Overview marketOverview={dashboardData[0].marketOverview} />
              <Prioritization industryPrioritization={dashboardData[0].industryPrioritization} />
            </div>

            <div className="market-right">
              <Competition marketCompetition={dashboardData[0].competition} />
              <Competitors competitors={dashboardData[0].competitor} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Market;
