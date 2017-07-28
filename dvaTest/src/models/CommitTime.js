import { commit } from '../services/CommitTime';
export default {

  namespace: 'time',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *CommitTime({ payload }, { call, put }) {  // eslint-disable-line
      const data = yield call(commit, payload);
      console.log(payload);
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
