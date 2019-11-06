import React from 'react';
import CardList from './CardLIst'
import { robots } from './robots'
import SearchBox from './SearchBox.js'


class App extends React.Component {
  render() {
    return (
      <div className="tc fw-9">
        <h1>F.R.I.E.N.D.S</h1>
        <SearchBox/>
        <CardList robots={robots} />
      </div>
    )
  }
}

export default App;
