import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBudgetEntryAction } from '../actions';

const BudgetForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    /*     console.log('title: ', title);
    console.log('amount: ', amount);
    console.log('description: ', description); */

    dispatch(addBudgetEntryAction(title, amount, description));
    setTitle('');
    setAmount(0);
    setDescription('');
  };

  return (
    <div className='budget-form'>
      <h2 className='ui header'>Add new entry</h2>
      <div className='ui divider'></div>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            onChange={(event) => setTitle(event.target.value)}
            placeholder='Entry title'
            value={title}
          />
        </div>
        <div className='field'>
          <label>Description</label>
          <textarea
            rows={4}
            onChange={(event) => setDescription(event.target.value)}
            placeholder='Enter a description'
            value={description}></textarea>
        </div>
        <div className='field'>
          <label>Amount</label>
          <input
            type='number'
            name='balance'
            onChange={(event) => setAmount(event.target.value)}
            placeholder='Enter balance'
            value={amount}
          />
        </div>
        <div className='field'>
          <button className='ui button primary'>Add new entry</button>
        </div>
      </form>
    </div>
  );
};

export default BudgetForm;
