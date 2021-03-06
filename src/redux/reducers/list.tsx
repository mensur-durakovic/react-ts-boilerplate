import { FETCH_LIST_SUCCESS } from '../actions';

type Props = {
  type: string;
  payload: any;
};

const INITIAL_STATE: any[] = [];

export default (state = INITIAL_STATE, { type, payload }: Props) => {
  switch (type) {
    case FETCH_LIST_SUCCESS:
      return payload;
    default:
      return state;
  }
};
