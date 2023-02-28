import React from 'react';
import ReactDOM from 'react-dom';
import TopNavigation from './components/topNavigation'
import MainSection from './components/mainSection'

class Main extends React.Component {
  
  render() {
    return  (
      <div className="">
        <TopNavigation />
        <MainSection />
      </div>
    )
  }
}

export default Main;