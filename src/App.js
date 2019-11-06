import React from 'react';
import CardList from './CardLIst'
import SearchBox from './SearchBox.js'
import Scroll from './Scroll'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
     return  res.json()
    })
      .then(users =>{
      this.setState({ users: users })
    })
  }
  onSearchChange = (event) => {
     this.setState({searchfield: event.target.value})
  }
  render() {
     const filterfriend = this.state.users.filter(robot => {
       return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
     })
    return (
      <div className="tc fw-9">
        <h1>F.R.I.E.N.D.S</h1>
        <SearchBox SearchChange={this.onSearchChange} />
        <Scroll>
        <CardList users={filterfriend} />
        </Scroll>
      </div>
    )
  }
}

export default App;
