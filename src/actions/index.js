import * as actions from '../actions/types';
import _ from 'lodash';

export const addBudgetEntryAction = (title, amount, description) => {
  return {
    type: actions.ADD_BUDGET_ENTRY,
    payload: { amount, description, title, id: _.uniqueId() },
  };
};

export const editBudgetEntry = (title, amount, description, id) => {
  return {
    type: actions.UPDATE_BUDGET_ENTRY,
    payload: { amount, description, title, id },
  };
};

export const selectBudgetEntry = (id) => {
  return {
    type: actions.SELECT_BUDGET_ENTRY,
    payload: id,
  };
};

export const deleteBudgetEntry = (id) => {
  return {
    type: actions.DELETE_BUDGET_ENTRY,
    payload: id,
  };
};
