import React from 'react';
import Balance from './balanace';
import Tile from './tile';

function Home() {
  return <div>
          <Balance />
          <div className="flex gap-4 mt-4">
              <Tile
                iconColor="bg-teal-500"
                 icon="bi bi-arrow-down text-teal-700" 
                 title="income" 
                  amount="$10,500.00"
              />
               <Tile
                iconColor="bg-rose-200"
                 icon="bi bi-arrow-up text-rose-700" 
                 title="expenses" 
                  amount="$10,500.00"
              />
          </div>
     
         </div>
}

export default Home;