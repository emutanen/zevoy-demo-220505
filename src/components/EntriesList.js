import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBudgetEntry } from '../actions';
import _ from 'lodash';

// TODO: change outline icon to inline when selected

const renderListEntry = (title, amount, description, id, dispatch, selectedEntry) => {
  return (
    <div className='item' key={id}>
      <i className={`arrow alternate circle right ${selectedEntry?.id === id ? '' : 'outline'} icon`}></i>
      <div className='content'>
        <a className='header' onClick={() => dispatch(selectBudgetEntry(id))}>
          {title}
        </a>
        <div className='description'>{`Description: ${description}`}</div>
        <h4 className='ui header'>{`${amount} EUR`}</h4>
      </div>
    </div>
  );
};

const EntriesList = () => {
  const selectedEntry = useSelector((state) => state.operations.selectedEntry);
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.operations.budgetEntries);
  console.log(JSON.stringify(entries));
  const EntriesJSX = _.map(entries, (entry) => {
    const { title, amount, description, id } = entry;
    return renderListEntry(title, amount, description, id, dispatch, selectedEntry);
  });

  return (
    <div className='entries-list'>
      <span className='ui large text'>Items In Budget</span>
      <div className='ui divider'></div>
      <div className='ui list'>
        {EntriesJSX.map((entry) => {
          return entry;
        })}
      </div>
    </div>
  );
};

export default EntriesList;
