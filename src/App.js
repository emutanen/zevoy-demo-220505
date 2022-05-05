import React from 'react';
import BudgetStats from './components/BudgetStats';
import BudgetForm from './components/BudgetForm';
import EntriesList from './components/EntriesList';
import EntryDetails from './components/EntryDetails';

const App = () => {
  return (
    <div className='app'>
      <span className='ui large text'>Zevoy Budget By Erkka</span>
      <div className='ui divider'></div>
      <div className='ui stackable four column grid'>
        <div className='column'>
          <BudgetStats />
        </div>
        <div className='column'>
          <BudgetForm />
        </div>
        <div className='column'>
          <EntriesList />
        </div>
        <div className='column'>
          <EntryDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
