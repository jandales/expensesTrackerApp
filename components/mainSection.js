import React from 'react';
import Home from './home'
import TransactionList from './transactions/transactionList'
function MainSection() {
  
   return  <div className="px-4">
   <h1 className="text-2xl font-bold" >Overview</h1>
   <Home />
   
   <TransactionList />
    
   </div>
   
   
}

export default MainSection;