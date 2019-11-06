import React from 'react';
import CardList from '../components/CardLIst'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'


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
    const { users, searchfield } = this.state
     const filterfriend = users.filter(robot => {
       return robot.name.toLowerCase().includes(searchfield.toLowerCase())
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
