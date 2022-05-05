import React from 'react';
import BudgetForm from './BudgetForm';

const Modal = ({ showModal, setShowModal }) => {
  return (
    <div className={`ui ${showModal ? 'active' : ''} fullscreen modal`}>
      <i className='close icon' onClick={() => setShowModal(false)}></i>
      <div className='center aligned header'>Edit budget entry</div>
      <div className='ui segment'>
        <BudgetForm />
      </div>
      <div class='actions'>
        <div class='ui black deny button'>Nope</div>
        <div class='ui positive right labeled icon button'>
          Yep, that's me
          <i class='checkmark icon'></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
