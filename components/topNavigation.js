import React from 'react';

function TopNavigation() {
  
  return <div className="w-full flex justify-between items-center px-8 py-4">
      <span className="">
      <i class="bi bi-list text-2xl"></i>
      </span>
      
      <span className="relative">
          <i class="bi bi-bell text-2xl"></i>
          <i class="bi bi-circle-fill absolute top-0 right-0 text-sky-500 text-xs"></i>
      </span>
  </div>
  
}

export default TopNavigation;