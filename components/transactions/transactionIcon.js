import React from 'react';

function TransactionIcon (props) {
  
  let icon = 'jijij';
  
  
  if(props.category == 'shopping') {
    icon = 'bi bi-cart4';
  
  } 
  
  if (props.category == 'bills') {
     icon = '"bi bi-bus-front-fill';
     
  }
  
  if (props.category == 'dinner') {
          icon = 'bi bi-cup-hot';
          
  }
  
  console.log(props.category)
  
  return <div className={`flex  w-12 aspect-square  border rounded-full items-center justify-center ${props.type == 'expenses' ? 'bg-rose-200' : 'bg-blue-200'}`}>

  <i class={`${icon} text-xl ${props.type == 'expenses' ? 'text-rose-500' : 'text-blue-500' }`}></i>
  
  </div>
}

export default TransactionIcon;

