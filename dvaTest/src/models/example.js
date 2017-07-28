import { routerRedux } from 'dva/router';
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location => {
        const pathname = location.pathname
        if (pathname === '/') {
          dispatch(routerRedux.push({ pathname: '/search' }))
        }
      })
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
