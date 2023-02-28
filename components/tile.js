import React from 'react';

function Tile(props){
  return <div className="w-1/2 rounded-lg border flex flex-col items-center gap-1 p-4">
  <span className={ `flex items-center justify-center  w-8 h-8 rounded-full ${props.iconColor}`}>
      <i className={props.icon}></i>
  </span>
  
     <label className="capitalize text-slate-500 text-xs font-semibold">{props.title}</label>
     <label className="font-extrabold font-xl text-bold">{props.amount}</label>
 
  </div>
}

export default Tile;