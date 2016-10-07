import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';


import Splash from './splash'
import Battle from './battle'
import Character from './characterSelect'

// I'm gonna keep state in here for this app as well
// damage types first
const affliction = "affliction"
const defence = "defence"
const evasion = "evasion"


// Character Images
var gohan = {
  attack1: require('../images/gohan/attack1'),
  attack2: require('../images/gohan/attack2'),
  attack3: require('../images/gohan/attack3'),
  select: require('../images/gohan/select'),
  team: require('../images/gohan/team')
}
var trunks = {
  attack1: require('../images/trunks/attack1'),
  attack2: require('../images/trunks/attack2'),
  attack3: require('../images/trunks/attack3'),
  select: require('../images/trunks/select'),
  team: require('../images/trunks/team')
}
var krillin = {
  attack1: require('../images/krillin/attack1'),
  attack2: require('../images/krillin/attack2'),
  attack3: require('../images/krillin/attack3'),
  select: require('../images/krillin/select'),
  team: require('../images/krillin/team')
}
var eighteen = {
  attack1: require('../images/18/attack1'),
  attack2: require('../images/18/attack2'),
  attack3: require('../images/18/attack3'),
  select: require('../images/18/select'),
  team: require('../images/18/team')
}


// characters next
var characters = [
{
  name:'Gohan',
  health:100,
  attack:10,
  defence:10,
  image: gohan.select,
  attack1:{
    desc: "Gohan uses his bad ass karate skills to kick your enemy's ass. This causes like serious damage, dude",
    type:affliction,
    image: gohan.attack1

  }
},
{},
{},
]


export default class Index extends Component {
  constructor(props){
    super(props)
  
    this.state = {

    }
  }

  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'character') {
      return (
        <Character
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'battle') {
      return (
        <Battle
        {...this.props} 
        navigator={navigator} />
        );
    }
   
    if (routeId === 'splash') {
      return (
        <Splash
        {...this.props} 
        navigator={navigator} />
        );
    }

    
  
   }


  render() {
    return (
      <View style={{flex:1}}>
     <Navigator
     style={{flex: 1}}
     ref={'NAV'}
     initialRoute={{id: 'character', name: 'character'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}
