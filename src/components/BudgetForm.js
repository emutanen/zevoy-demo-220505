import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBudgetEntryAction } from '../actions';
import FormFields from './FormFields';

const BudgetForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const disable = title === '' && amount === 0 && description === '';

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
        <button className={`ui button primary ${disable ? 'disabled' : ''}`}>Add new entry</button>
      </form>
    </div>
  );
};

export default BudgetForm;
