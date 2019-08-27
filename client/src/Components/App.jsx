import React from 'react';
import Card from './Card.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listings: []
    }
  }
  componentDidMount() {
    fetch('/api/listings')
    .then(res => res.json())
    .then(
      (result) => {
      let listingToRender = [];
      for (let i = 0; i < 12; i++) {
        let rand = Math.floor(Math.random() * Math.floor(100));
        listingToRender.push(result[rand]);
      }
      this.setState({
        listings: listingToRender,
      });
    },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Places Nearby</h1>
        <Card listings={this.state.listings} />
      </div>
    )
  }
}

export default App;