import React from 'react';
import Heading from './heading';
import Transaction from './transaction';

function TransactionList () {
  
  const list = [
    {category : 'bills', amount : '-$300.00', date : '28 Feb 2023'},
    {category : 'shopping', amount : '-$500.00', date : '27 March 2023'},
    {category : 'dinner', amount : '-$300.00', date : '6 April 2023'},
    {category : 'dinner', amount : '-$300.00', date : '7 April 2023'},
    {category : 'bills', amount : '-$300.00', date: '7 April 2023'},
    ];
  
  return <div className="w-full border rounded-lg min-h-[100px] mt-4 p-4">
  
    <Heading />
    
    <div className="mt-4">
    
    {list.map( (item,index) => 
        <Transaction key={index}
          category={item.category}
          amount={item.amount}
          date={item.amount}
        />
    )}
    
    
    </div>
  </div>
}

export default TransactionList;