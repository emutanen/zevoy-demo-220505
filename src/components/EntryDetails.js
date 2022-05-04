import React from 'react';
import { useSelector } from 'react-redux';

const EntryDetails = () => {
  const selectedEntry = useSelector((state) => state.operations.selectedEntry);

  const roundedPricing = selectedEntry?.amount.toLocaleString('fullwide', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'EUR',
    useGrouping: true,
  });

  return (
    <div className='entry-list'>
      <h2 className='ui header'>Budget Entry Details</h2>
      <div className='ui divider'></div>
      <div className='ui cards'>
        <div className='card'>
          <div className='content'>
            <div className='header'>{selectedEntry?.title}</div>
            <div className='description'>{selectedEntry?.description}</div>
          </div>

          <div className='ui statistic'>
            <div className='value'>{roundedPricing}</div>
            <div className='label'>Price</div>
          </div>

          <div class='ui bottom attached button'>
            <i class='edit icon'></i>
            Edit entry
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryDetails;
