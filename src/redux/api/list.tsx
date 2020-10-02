import axios from 'axios';
import config from '../../configs/config';
import DashboardData from '../mock/market.json';
type APIFetchList = () => Promise<IItem[]>;
type APIFetchDashboardData = () => Promise<IDashboardData[]>;

export const fetchList: APIFetchList = async () => {
  const response = await axios.get(config.BASE_URL + '/users/1');
  localStorage.setItem('user', JSON.stringify(response.data));
  const list: IItem[] = [response.data];
  return list;
};

export const fetchMarketData: APIFetchDashboardData = async () => {
  const dashboardData: IDashboardData = DashboardData;
  return [dashboardData];
};
