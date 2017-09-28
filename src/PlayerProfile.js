import React, { Component } from 'react';
import { Row, Col, CardPanel } from 'react-materialize';


class PlayerProfile extends Component {
     render(){
    	return (
		<CardPanel className="teal lighten-4 black-text">
		<p> {this.props.player_data.name}</p>	
		<img src={this.props.player_data.avatar_url} width='100%' />
		</CardPanel>
		
    )
 
    }
}

export default PlayerProfile;
