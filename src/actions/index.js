import * as actions from '../actions/types';
import _ from 'lodash';

export const addBudgetEntryAction = (title, amount, description) => {
  return {
    type: actions.ADD_BUDGET_ENTRY,
    payload: { amount, description, title, id: _.uniqueId() },
  };
};

export const selectBudgetEntry = (id) => {
  return {
    type: actions.SELECT_BUDGET_ENTRY,
    payload: id,
  };
};
