import React from 'react';
import TransactionIcon from './transactionIcon';
import TransactionType from './transactionType';
import TransactionAmount from './transactionAmount';

function Transaction(props) {
  return <div className="w-full flex items-center gap-4  border-b last:border-b-0 py-4">
  

     <TransactionIcon category={props.category} type="expenses" />
  
  
     <TransactionType name={props.category} date={props.date} /> 
     
     <TransactionAmount amount={props.amount} />
   
        
  
  </div>
}

export default Transaction;