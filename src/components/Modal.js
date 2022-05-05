import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editBudgetEntry, deleteBudgetEntry } from '../actions';
import FormFields from './FormFields';

const Modal = ({ showModal, setShowModal }) => {
  const selectedEntryId = useSelector((state) => state.operations.selectedEntry?.id);
  const selectedEntryData = useSelector((state) => state.operations.budgetEntries[selectedEntryId]);
  const [editTitle, setTitle] = useState(selectedEntryData?.title);
  const [editAmount, setAmount] = useState(selectedEntryData?.amount);
  const [editDescription, setDescription] = useState(selectedEntryData?.description);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedEntryData === undefined) return;
    setTitle(selectedEntryData?.title);
    setAmount(selectedEntryData.amount);
    setDescription(selectedEntryData.description);
  }, [selectedEntryData]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(editBudgetEntry(editTitle, editAmount, editDescription, selectedEntryId));
    setShowModal(false);
  };

  const onClickDelete = (event) => {
    event.preventDefault();

    dispatch(deleteBudgetEntry(selectedEntryId));
    setShowModal(false);
  };

  return (
    <div className={`ui ${showModal ? 'active' : ''} fullscreen modal`}>
      <i className='close icon' onClick={() => setShowModal(false)}></i>
      <div className='center aligned header'>Edit budget entry</div>
      <form className='ui form' onSubmit={onFormSubmit} style={{ padding: '1em' }}>
        <FormFields
          title={editTitle}
          setTitle={setTitle}
          description={editDescription}
          setDescription={setDescription}
          amount={editAmount}
          setAmount={setAmount}
        />
        <button className='negative ui button' onClick={onClickDelete}>
          Delete entry
        </button>
      </form>
      <div className='actions'>
        <div className='ui mini blue secondary button' onClick={() => setShowModal(false)}>
          Cancel
        </div>
        <div className='ui mini positive right labeled icon button' onClick={onFormSubmit}>
          Save changes
          <i className='checkmark icon'></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
