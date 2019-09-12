import React from 'react'
import TransactionCard from '../transaction-card/transaction-card'
import './transaction-list.css'

const TransactionList = (props) =>{
    const { transactions, handleAllow, handleBlock } = props 
    return (
        <div class="list-container">
            {transactions.length === 0 && <div>No Transactions</div>}
            {transactions.map(item => 
                <TransactionCard 
                    transactionID = {item.transactionID}
                    fromUser = {item.fromUser}
                    toUser = {item.toUser}
                    amount = {item.amount} 
                    handleAllow = {handleAllow} 
                    handleBlock = {handleBlock}

                />
            )}
        </div>
    )
}

export default TransactionList;