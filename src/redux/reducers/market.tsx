import { FETCH_DASHBOARD_DATA_SUCCESS } from '../actions';

type Props = {
  type: string;
  payload: IDashboardData[];
};

const INITIAL_STATE: IDashboardData[] = [];

export default (state = INITIAL_STATE, { type, payload }: Props) => {
  switch (type) {
    case FETCH_DASHBOARD_DATA_SUCCESS:
      return payload;
    default:
      return state;
  }
};
