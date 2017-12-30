import { Map, List } from 'immutable';
import Home from 'flux/components/home';

export const INITIAL_STATE = Map({
  home: Home.INITIAL_STATE,
});

export class Actions {
  get Home() {
    return new Home.Actions();
  }
  get SetList() {
    return new Home.Actions(list);
  }
  get edit() {
    return new Home.Actions(data);
  }
}

export function reducers(previousState, action) {
  return previousState.update('home', state => Home.reducers(state, action));
}
