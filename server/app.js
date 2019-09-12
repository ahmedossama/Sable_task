'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000

const cors = require('cors')

let transactionList = [{
    "transactionID": "1237777",
    "fromUser": "82308320",
    "toUser": "278932",
    "amount": 27982
},{
    "transactionID": "456",
    "fromUser": "82308320",
    "toUser": "278932",
    "amount": 27982
},{
    "transactionID": "789",
    "fromUser": "82308320",
    "toUser": "278932",
    "amount": 27982
}]

const allowedTransactions = [];

const blockedTransactions = [];



app.use(cors())

app.get('/getTransactions', (req, res) => {
    res.send(transactionList)
})

app.post('/allowTransaction/:id', (req, res) => {
    const { id } = req.params
    let found = false
    transactionList = transactionList.map(element=> {
        if(element.transactionID === id){
            allowedTransactions.push(element);
            found = true
        }else{
            return element
        }
    }).filter(element => element && element.transactionID != id) 

    if(found){
        res.send({
            transactionList: transactionList
        })
    }else{
        res.status(404).send(`Transaction with id: ${id} is not found!`)
    }

})

app.post('/blockTransaction/:id', (req, res) => {
    const { id } = req.params
    let found = false
    transactionList = transactionList.map(element=> {
        if(element.transactionID === id){
            blockedTransactions.push(element);
            found = true
        }else{
            return element
        }
    }).filter(element => element && element.transactionID != id) 

    if(found){
        res.send({
            transactionList: transactionList
        })
    }else{
        res.status(404).send(`Transaction with id: ${id} is not found!`)
    }
})

app.listen(port, () => console.log(`server running on port ${port}!`))