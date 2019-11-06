import React from 'react';
import './App.css';
import NewCard from './newCard'

class App extends React.Component {
  render() {
    return (
       <div className="App">
        <NewCard />
        <NewCard />
    </div>
    )
  }
}

export default App;
