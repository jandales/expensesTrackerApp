import React from 'react';

function Heading () {
  return <div className="w-full flex justify-between items-center ">
  <h3 className="font-extrabold text-base">Recent Transactions</h3>
  <a href="#" className="flex items-center text-blue-400 text-sm ">
   See All <i class="bi bi-chevron-right"></i>
  </a>
  </div>
}

export default Heading;