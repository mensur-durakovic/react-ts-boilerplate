import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import list from './list';
import market from './market';

export default (history: History) =>
  combineReducers<IReducerStates>({
    list,
    market,
    router: connectRouter(history)
  });
