import React from 'react'
import './transaction-card.css'

const TransactionCard = (props) => {
    const { transactionID, fromUser, toUser, amount, handleAllow, handleBlock } = props
    return (
        <div class="transaction-card">
            <p>
                Transaction ID: {transactionID} 
                <br />
                <br />
                From User: {fromUser}
                <br />
                <br />
                To User: {toUser}
                <br />
                <br />
                Amout: ${amount} 
            </p>
            <div class="buttons-container">
                <button onClick={() => handleAllow(transactionID)} class="green-button">Allow</button>
                <button onClick={() => handleBlock(transactionID)} class="red-button">Block</button>
            </div>
        </div>
    )
}

export default TransactionCard;