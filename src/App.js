import React from 'react';
import CardList from './CardLIst'
import { robots } from './robots'
import SearchBox from './SearchBox.js'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
     this.setState({searchfield: event.target.value})
  }
  render() {
     const filterfriend = this.state.robots.filter(robot => {
       return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
     })
    return (
      <div className="tc fw-9">
        <h1>F.R.I.E.N.D.S</h1>
        <SearchBox SearchChange={this.onSearchChange}/>
        <CardList robots={filterfriend} />
      </div>
    )
  }
}

export default App;
