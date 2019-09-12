import React from 'react';
import './App.css';
// import TransactionList from './components/transaction-list/transaction-list'
import RootContainer from './containers/root-container/root-container'


function App() {
  return (
    <div class="App">
      <RootContainer />
      {/* <div class="header-section">
         <p>Suspicious transactions:</p> 
      </div>
      <div class="transaction-section">
        <TransactionList transactions={transactions} />
      </div> */}
    </div>
  );
}

export default App;
