import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  FETCH_DASHBOARD_DATA_REQUEST,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_FAILURE
} from '../actions';
import * as API from '../api';

export default [
  takeLatest(FETCH_LIST_REQUEST, fetchList),
  takeLatest(FETCH_DASHBOARD_DATA_REQUEST, fetchDashboardData)
];

type FetchList = {
  type: string;
  payload: {
    resolve: (list: IItem[]) => void;
    reject: (error: string) => void;
  };
};
type FetchDashboardData = {
  type: string;
  payload: {
    resolve: (list: IDashboardData[]) => void;
    reject: (error: string) => void;
  };
};

function* fetchList({ payload: { resolve, reject } }: FetchList) {
  try {
    const list: IItem[] = yield call(API.fetchList);

    resolve(list);

    yield put({ type: FETCH_LIST_SUCCESS, payload: list });
  } catch (error) {
    reject(error);

    yield put({ type: FETCH_LIST_FAILURE, payload: error });
  }
}

function* fetchDashboardData({ payload: { resolve, reject } }: FetchDashboardData) {
  try {
    const dashboardData: IDashboardData[] = yield call(API.fetchMarketData);

    resolve(dashboardData);

    yield put({ type: FETCH_DASHBOARD_DATA_SUCCESS, payload: dashboardData });
  } catch (error) {
    reject(error);

    yield put({ type: FETCH_DASHBOARD_DATA_FAILURE, payload: error });
  }
}
