import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBudgetEntryAction } from '../actions';
import FormFields from './FormFields';

// TODO: disable submit button if all states are defaults
// TODO: Empty items can be added and there is no validation whatsoever

const BudgetForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addBudgetEntryAction(title, amount, description));

    setTitle('');
    setAmount(0);
    setDescription('');
  };

  return (
    <div className='budget-form'>
      <span className='ui large text'>Add Items</span>
      <div className='ui divider'></div>
      <form className='ui form' onSubmit={onFormSubmit}>
        <FormFields
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          amount={amount}
          setAmount={setAmount}
        />
        <button className='ui button primary'>Add new entry</button>
      </form>
    </div>
  );
};

export default BudgetForm;
