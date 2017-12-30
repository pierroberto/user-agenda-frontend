import { Map } from 'immutable';
import reducers from './reducers';
import Actions from './actions';
import ACTIONS from './constants';

export const INITIAL_STATE = Map({
  test: Map(),
  setList: [],
  edit: { data: null },
});

export default {
  Actions,
  reducers,
  ACTIONS,
  INITIAL_STATE,
};
