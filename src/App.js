import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BudgetStats from './components/BudgetStats';
import BudgetForm from './components/BudgetForm';
import EntriesList from './components/EntriesList';

const App = () => {
  const storeContent = useSelector((state) => state.operations.content);

  useEffect(() => {
    console.log('store content: ', storeContent);
  }, [storeContent]);

  return (
    <div className='app'>
      <div className='ui grid'>
        <div className='four wide column'>
          <BudgetStats />
        </div>
        <div className='four wide column'>
          <BudgetForm />
        </div>
        <div className='four wide column'>
          <EntriesList />
        </div>
        <div className='four wide column'>{storeContent}</div>
      </div>
    </div>
  );
};

export default App;
