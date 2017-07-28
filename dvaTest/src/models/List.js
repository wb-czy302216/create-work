import { getlists } from '../services/List';
export default {

  namespace: 'list',

  state: {
    taskdata: {},
    data:{}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },

  },

  effects: {
    *getlist({ payload }, { call, put }) {  // eslint-disable-line
      const {message} = yield call(getlists, payload);
      yield put({ 
        type: 'save',
        data: message
      });
    }
  },

  reducers: {
    save(state, data) {
      return { ...state, data };
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === "/show") {
          dispatch({ type: "getlist", payload: query });
        }
      });
    }
  }

};
