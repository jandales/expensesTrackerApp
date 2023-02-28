import React from 'react';

function Balance(){
  return <div className="relative overflow-hidden w-full h-28 bg-indigo-600 rounded-xl flex flex-col items-center justify-center p-4 mt-4 gap-2">
    
    <div className="absolute border-2 border-amber-500 rounded-full h-16 w-16  -top-2 -left-2"></div>
    
      <div className="absolute border-2 border-rose-500 rounded-full h-4 w-4  bottom-2 left-10"></div>
      
      <div className="absolute bg-white rounded-full h-2 w-2 right-12 top-6"></div>
      
       <div className="absolute bg-blue-400 rounded-full h-16 w-16  -bottom-2 -right-2"></div>


   
      <h4 className="text-xs font-semibold text-slate-400">Total Balance</h4>
    
      <label className="text-white text-3xl font-extrabold">$4500.00</label>
   
    </div>
}

export default Balance;