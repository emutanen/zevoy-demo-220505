import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const BudgetStats = () => {
  const budgetEntries = useSelector((state) => state.operations.budgetEntries);
  const totalBudget = _.reduce(
    budgetEntries,
    (acc, entry, key) => {
      return acc + Number.parseFloat(entry.amount);
    },
    0.0
  );

  const roundedTotalBudget = totalBudget.toLocaleString('fullwide', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'EUR',
    useGrouping: true,
  });

  return (
    <div className='ui green segment' style={{ textAlign: 'center' }}>
      <h1 className='ui header'>Budget Stats</h1>
      <div className='ui divider'></div>
      <div className='ui statistic'>
        <div className='value'>{_.size(budgetEntries)}</div>
        <div className='label'>Items in Budget</div>
      </div>
      <div className='ui divider'></div>
      <div className='ui small statistic'>
        <div className='label'>Total amount of balance</div>
        <div className='value' style={{ paddingTop: '0.28em' }}>
          {roundedTotalBudget ?? 'Not available'}
        </div>
      </div>
    </div>
  );
};

export default BudgetStats;
