import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Modal from './Modal';

const EntryDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const selectedEntry = useSelector((state) => state.operations.selectedEntry);
  const roundedPricing = Number.parseFloat(selectedEntry?.amount).toLocaleString('fullwide', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'EUR',
    useGrouping: true,
  });

  useEffect(() => {}, [selectedEntry?.amount, selectedEntry?.description, selectedEntry?.title]);

  return (
    <div className='entry-list'>
      <span className='ui large text'>Budget Entry Details</span>
      <div className='ui divider'></div>
      <div className='ui cards'>
        <div className='card'>
          <div className='content'>
            <div className='header'>{selectedEntry?.title ?? 'Please select item'}</div>
            <div className='description'>{selectedEntry?.description}</div>
          </div>
          <div className='ui small statistic'>
            <div className='value'>{selectedEntry ? roundedPricing : 'EUR'}</div>
            <div className='label'>Price</div>
          </div>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <div
            className={`ui bottom attached button ${selectedEntry ? '' : 'disabled'}`}
            onClick={() => {
              setShowModal(!showModal);
            }}>
            <i class='edit icon'></i>
            Edit entry
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryDetails;
