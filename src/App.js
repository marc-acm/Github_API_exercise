import React, { Component } from 'react';
import './App.css';
import PlayerProfile from './PlayerProfile';
import Judging from './Judging';
import { Row, Col, Button } from 'react-materialize';


class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
    player1: {},
    player2: {}
  }
}


lookupPlayer(player_number) {
  console.log('lookup player')

  var username = this.player1Input.value

fetch(`https://api.github.com/users/${username}`)
      .then(function(response){
        return response.json()
      })
      .then((response) => {
        this.setState({ player1: response})
   })
 }  


handleInputChange() {
  console.log('handleInputChange')
}



  render() {
    return (
      <div>
      <h1>Versus Hub</h1>

        <Judging
          player1={this.state.player1}
          player2={this.state.player2}

         />

        <Row>
        <Col s={12} m={6}>
    
          <input 
            ref={(input) => {this.player1Input = input;}}
          />
          <Button waves='light onClick={()'>Enter</Button>
    
        <PlayerProfile player_data={this.state.player1}/>

        </Col>
        </Row>

        </div>
    );
  }
}

export default App;
