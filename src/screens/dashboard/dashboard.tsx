import React, { useEffect, useState } from 'react';
import Spinner from '../../shared/components/spinner';
import UserDetails from '../../shared/components/userDetails/index';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '@redux/actions';

type Props = {};

const Dashboard: React.FC<Props> = () => {
  const [fetching, setFetching] = useState(true);
  const list = useSelector((state: IReducerStates) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setFetching(true);

      try {
        dispatch(fetchList());
      } catch (error) {
        console.error(error);
      }

      setFetching(false);
    })();
  }, [dispatch, list]);

  return (
    <>
      <div className="dashboard">
        <div>Dashboard</div>
        {fetching && <Spinner />}
        {!fetching && list.length > 0 && <UserDetails user={list[0]} />}
      </div>
    </>
  );
};

export default Dashboard;
