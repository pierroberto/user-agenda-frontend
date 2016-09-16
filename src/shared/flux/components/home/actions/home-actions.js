import ACTION from '../constants';

export default class HomeActions {
  test() {
    return {
      type: ACTION.TEST,
      payload: new Promise((resolve) => {
        resolve([{ info: 'from server' }]);
      }),
    };
  }
}
