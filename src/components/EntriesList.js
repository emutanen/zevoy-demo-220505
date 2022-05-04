import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const EntriesList = () => {
  const entries = useSelector((state) => state.operations.budgetEntries);
  console.log(JSON.stringify(entries));
  const entriesStrings = _.map(entries, (entry) => {
    const { title, amount, description } = entry;
    return `${title}: ${amount} EUR, Description: ${description}`;
  });
  console.log('entriesStrings: ', entriesStrings);

  return (
    <div className='entries-list'>
      <div className='ui list'>
        {entriesStrings.map((entry) => {
          return (
            <div className='item'>
              <i className='map marker icon'></i>
              <div className='content'>
                <a className='header'>Testing</a>
                <div className='description'>{}</div>
                {entry}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntriesList;
