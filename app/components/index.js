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
const evasionAttack = "evasionAttack"


// Character Images
var gohan = {
  attack1: require('../images/gohan/attack1.png'),
  attack2: require('../images/gohan/attack2.png'),
  attack3: require('../images/gohan/attack3.png'),
  select: require('../images/gohan/select.png'),
  team: require('../images/gohan/team.png')
}
var korra = {
  attack1: require('../images/korra/attack1.png'),
  attack2: require('../images/korra/attack2.png'),
  attack3: require('../images/korra/attack3.png'),
  select: require('../images/korra/select.png'),
  team: require('../images/korra/team.png')
}
var trunks = {
  attack1: require('../images/trunks/attack1.png'),
  attack2: require('../images/trunks/attack2.png'),
  attack3: require('../images/trunks/attack3.png'),
  select: require('../images/trunks/select.png'),
  team: require('../images/trunks/team.png')
}
var krillin = {
  attack1: require('../images/krillin/attack1.png'),
  attack2: require('../images/krillin/attack2.png'),
  attack3: require('../images/krillin/attack3.png'),
  select: require('../images/krillin/select.png'),
  team: require('../images/krillin/team.png')
}
var eighteen = {
  attack1: require('../images/18/attack1.png'),
  attack2: require('../images/18/attack2.png'),
  attack3: require('../images/18/attack3.png'),
  select: require('../images/18/select.png'),
  team: require('../images/18/team.png')
}


// characters next
var characters = [
{
  name:'Super Gohan',
  health:100,
  attack:10,
  flip: false,
  ref :"gohan",
  evasion:0,
  defence:10,
  image: gohan.select,
  team: gohan.team,
  attack1:{
    name:"Kung Fu Skills",
    desc: "Gohan uses his bad ass karate skills to kick your enemy's ass. This causes like serious damage, dude",
    type:affliction,
    image: gohan.attack1,
    stack: 5,
    turns:1

  },
  attack2:{
    name:'Gangstar Yell',
    desc: "Dude. Gohan like gets mad and does this thing where his defense goes up for 2 turns. it's crazy",
    type:defence,
    image: gohan.attack2,
    stack: 10,
    turns:2

  },
  attack3:{
    name:"Flyin' Like A Boss",
    desc: "Gohan uses his bad ass karate skills to kick your enemy's ass. This causes like serious damage, dude",
    type: evasionAttack,
    image: gohan.attack3,
    stack: 5,
    turns:2


  }
},
{
  name:'Trunks',
  health:100,
  attack:10,
  flip: false,
  ref :"trunks",
  evasion:0,
  defence:10,
  image: trunks.select,
  team: trunks.team,
  attack1:{
    name: 'Throat Punch',
    desc: "Nobody likes being punched in the throat. That's why he does it",
    type:affliction,
    image: trunks.attack1,
    stack: 5,
    turns:1

  },
  attack2:{
    name: "I'm coming, Bitch!!!",
    desc: "Trunks slashes his enemy with his sword and it really really hurts",
    type:defence,
    image: trunks.attack2,
    stack: 10,
    turns:2

  },
  attack3:{
    name:"I can fly, Bitch!!!",
    desc: "Trunks Flys like a boss",
    type: evasionAttack,
    image: trunks.attack3,
    stack: 5,
    turns:2


  }
},
{
  name:'Krillin',
  health:100,
  attack:10,
  defence:10,
  flip: false,
  evasion:0,
  ref :"krillin",
  image: krillin.select,
  team: krillin.team,
  attack1:{
    name:'Smell My Armpits, Bitch!!',
    desc: "Krillin can't create a distructo disc, but he can make you smell his pits",
    type:affliction,
    image: krillin.attack1,
    stack: 5,
    turns:1

  },
  attack2:{
    name:"Slap A Bitch",
    desc: "Krillin gets hella mad and slaps his enemy in the face. +10 defence for being a boss",
    type:defence,
    image: krillin.attack2,
    stack: 10,
    turns:2

  },
  attack3:{
    name:"Kick His Face!!",
    desc: "Krillin kicks his enemy in the face. It really hurts",
    type: evasionAttack,
    image: krillin.attack3,
    stack: 5,
    turns:2


  }
},
{
  name:'18',
  health:100,
  attack:10,
  defence:10,
  flip: false,
  evasion:0,
  ref :"eight",
  image: eighteen.select,
  team: eighteen.team,
  attack1:{
    name:"Lazer Eyes",
    desc: "18 uses her iconic eyebeams to melt her enemy. That's what you get fool!",
    type:affliction,
    image: eighteen.attack1,
    stack: 5,
    turns:1

  },
  attack2:{
    name:'Throat Punch',
    desc: "18 uses her android precision to punch a bitch in the throat. What now fool?",
    type:defence,
    image: eighteen.attack2,
    stack: 10,
    turns:2

  },
  attack3:{
    name:'Riiiighht...',
    desc: "18 moves out of the way. Goodluck hitting her now. She also shots some evasion beams at her enemy",
    type: evasionAttack,
    image: eighteen.attack3,
    stack: 5,
    turns:2


  }
},{
  name:'Korra',
  health:100,
  attack:10,
  defence:10,
  flip: false,
  evasion:0,
  ref :"korra",
  image: korra.select,
  team: korra.team,
  attack1:{
    name: "I can control water, Bitch!!",
    desc: "Korra uses her water controlling powers to own her enemy. She's of a badass",
    type:affliction,
    image: korra.attack1,
    stack: 5,
    turns:1

  },
  attack2:{
    name:"Earth Bending, Bitch!!",
    desc: "Korra uses her earth bending skills to up her defence. Whud up? Get it?",
    type:defence,
    image: korra.attack2,
    stack: 10,
    turns:2

  },
  attack3:{
    name:'Throat Punch',
    desc: "Korra can control the elements, but she's not too big for an old fashion throat punch",
    type: evasionAttack,
    image: korra.attack3,
    stack: 5,
    turns:2


  }
},
]


export default class Index extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      characters: characters
    }
  }

  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'character') {
      return (
        <Character
        {...this.props} 
        characters = {this.state.characters}
        navigator={navigator} />
        );
    }
    if (routeId === 'battle') {
      return (
        <Battle
        {...this.props}
        team = {route.team} 
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
