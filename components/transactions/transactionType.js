import React from 'react';

function TransactionType(props) {
  return  <div>
       <label className="block text-sm font-bold capitalize">{props.name}</label>
        <label className="block text-xs font-semibold text-slate-500">{props.date}</label>
  </div>
      
      
     
}

export default TransactionType;