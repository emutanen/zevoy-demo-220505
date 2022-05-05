import React from 'react';

const FormFields = ({ title, setTitle, description, setDescription, amount, setAmount }) => {
  return (
    <>
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
    </>
  );
};

export default FormFields;
