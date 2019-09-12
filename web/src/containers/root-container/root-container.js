import React, { Component } from 'react';
import TransactionList from '../../components/transaction-list/transaction-list'

// let transactions = [{
//     "transactionID": "123",
//     "fromUser": "82308320",
//     "toUser": "278932",
//     "amount": 27982
//   },{
//     "transactionID": "456",
//     "fromUser": "82308320",
//     "toUser": "278932",
//     "amount": 27982
//   },{
//     "transactionID": "789",
//     "fromUser": "82308320",
//     "toUser": "278932",
//     "amount": 27982
//   }]

class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/getTransactions')
      .then(response => response.json())
      .then(transactions => this.setState({ transactions }));
  }

  allowTransaction = (transactionID) => {
    fetch(`http://localhost:8000/allowTransaction/${transactionID}`, {
      method: 'POST',
      headers: {},
      body: {}
    })
    .then(response => response.json())
    .then(data => this.setState({ transactions:data.transactionList }));
  }

  blockTransaction = (transactionID) => {
    fetch(`http://localhost:8000/blockTransaction/${transactionID}`, {
      method: 'POST',
      headers: {},
      body: {}
    })
    .then(response => response.json())
    .then(data => this.setState({ transactions:data.transactionList }));
  }

  render(){
    return (
        <div>
            <div className="header-section">
                <p>Suspicious transactions:</p> 
            </div>
            
            <div className="transaction-section">
                {!this.state.transactions && <div>Loading ....</div>}
                {this.state.transactions &&
                     <TransactionList transactions={this.state.transactions} 
                                      handleAllow={this.allowTransaction} 
                                      handleBlock={this.blockTransaction}/>}
            </div>
        </div> 
        )
  }
}
export default RootContainer;