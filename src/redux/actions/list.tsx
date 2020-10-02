import { Dispatch } from 'redux';

export const FETCH_LIST_REQUEST: 'fetch_list_request' = 'fetch_list_request';
export const FETCH_LIST_SUCCESS: 'fetch_list_success' = 'fetch_list_success';
export const FETCH_LIST_FAILURE: 'fetch_list_failure' = 'fetch_list_failure';

export const FETCH_DASHBOARD_DATA_REQUEST: 'fetch_dashboard_data_request' =
  'fetch_dashboard_data_request';
export const FETCH_DASHBOARD_DATA_SUCCESS: 'fetch_dashboard_data_success' =
  'fetch_dashboard_data_success';
export const FETCH_DASHBOARD_DATA_FAILURE: 'fetch_dashboard_data_failure' =
  'fetch_dashboard_data_failure';

export type DispatchFetchList = () => (dispatch: Dispatch) => Promise<void>;
export type DispatchFetchDashboardData = () => (dispatch: Dispatch) => Promise<void>;

export const fetchList: DispatchFetchList = () => async dispatch =>
  new Promise(
    (resolve, reject): void => {
      dispatch({
        type: FETCH_LIST_REQUEST,
        payload: { resolve, reject }
      });
    }
  );

export const fetchDashboardData: DispatchFetchDashboardData = () => async dispatch =>
  new Promise(
    (resolve, reject): void => {
      dispatch({
        type: FETCH_DASHBOARD_DATA_REQUEST,
        payload: { resolve, reject }
      });
    }
  );
