import _ from 'lodash';
import * as actions from '../actions/types';
export const INITIAL_STATE = { content: 'Hello World 2', budgetEntries: {} };

const operations = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_BUDGET_ENTRY:
      return { ...state, budgetEntries: { ...state.budgetEntries, [action.payload.id]: action.payload } };
    case actions.FETCH_BUDGET_ENTRIES: // payload is an array of entries objects
      const newEntries = _.mapKeys(action.payload, 'id');
      return { ...state, budgetEntries: { ...state.budgetEntries, ...newEntries } };

    case actions.GET_BUDGET_ENTRY: {
      return state.budgetEntries[action.payload.id];
    }
    case actions.UPDATE_BUDGET_ENTRY: {
      return { ...state, budgetEntries: { ...state.budgetEntries, [action.payload.id]: action.payload } };
    }
    case actions.DELETE_BUDGET_ENTRY: {
      return _.omit(state.budgetEntries, action.payload); // payload === id
    }
    default:
      return state;
  }
};

export default operations;
