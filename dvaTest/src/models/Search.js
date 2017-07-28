import { finds, changeType } from '../services/Search';
export default {

  namespace: 'search',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *find({ payload }, { call, put }) {  // eslint-disable-line
      console.log("1")
      const data = yield call(finds, payload);
      console.log(payload);
      yield put({ type: 'save' });
    },
    *type({ payload }, {call, put, select}) {
      console.log(payload);
      const data = yield call(changeType, payload);
      console.log(data);
      yield put({ type: "searchType"})
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    searchType(state, action){
      return { ...state, ...action.payload };
    }
  },

};
