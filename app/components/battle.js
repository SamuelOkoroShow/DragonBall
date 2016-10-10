/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  LayoutAnimation,
  Dimensions,
  ListView,
  TouchableOpacity,
  View
} from 'react-native';

import FlipCard from 'react-native-flip-card'

var {height, width} = Dimensions.get('window');
var i;
// Every Character gets a turn to move and a turn to attack.
const empty = "empty";
const occupied = "occupied"

const affliction = "affliction"
const defence = "defence"
const evasion = "evasion"
const evasionAttack = "evasionAttack"

var vegetaIm = {
  attack1: require('../images/vegeta/attack1.png'),
  attack2: require('../images/vegeta/attack2.png'),
  attack3: require('../images/vegeta/attack3.png'),
  attack4: require('../images/vegeta/attack4.png'),
  team: require('../images/vegeta/team.png')
}

var vegeta = {
  name:'vegeta',
  health:300,
  attack:20,
  defence:10,
  team: vegetaIm.team,
  attack1:{
    desc: "Gohan uses his bad ass karate skills to kick your enemy's ass. This causes like serious damage, dude",
    type:affliction,
    image: vegetaIm.attack1,
    stack: 5,
    turns:1

  },
  attack2:{
    desc: "Dude. Gohan like gets mad and does this thing where his defense goes up for 2 turns. it's crazy",
    type:defence,
    image: vegetaIm.attack2,
    stack: 10,
    turns:2

  },
  attack3:{
    desc: "Gohan uses his bad ass karate skills to kick your enemy's ass. This causes like serious damage, dude",
    type: evasionAttack,
    image: vegetaIm.attack3,
    stack: 5,
    turns:2


  }
}


var tiles2 = [
  {type:'defence', occupied:false},
  {type:'offense', occupied:false},
  {type:'evade', occupied:true}
  ]

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var tiles1 = [occupied, occupied, occupied, empty, empty,empty]
export default class battle extends Component {
  constructor(props){
    super(props)
    this.state = {
      vegetaCards: ds.cloneWithRows(tiles2),
      width:0,
      character1: this.props.team[0].health,
      character2: this.props.team[1].health,
      character3: this.props.team[2].health,
      enemy:vegeta,
      heros: this.props.team,
      team: ds.cloneWithRows(this.props.team),
      
    }
  }
  
  // Action are all right here
  updateCard(){}

  updateBoard(){
    this.setState({
    })
  }
  updateHealth(){}
  nextTurn(){}

  action(type, tile, attack, defence){
    if(type == affliction){

    }if(type == defence){

    }if(type == evasion){

    }
  }

  move(char, location){
    if(tiles1[location] != occupied){
      this.setState({
        char: {...this.state.char,
        tile: location

      }})
      this.updateBoard()
      this.nextTurn()
    }
  }

  cardSet(x){
    if(x.type == null){
        return(
          <TouchableOpacity >
          <FlipCard 
          style={{ width:width/3 - 20, margin:10, borderWidth:0}}
          clickable={false}
          >
      {/* Face Side */}
      <Image source={require('../images/cardBack.jpg')} resizeMode="stretch" style={{borderRadius:8, flex:1, width:null, height:null, alignItems:'center', justifyContent:'center'}}>
        <Image source={x.image} resizeMode="contain" style={{height:150, width:150}} />
      </Image>
      {/* Back Side */}
      <Image source={require('../images/cardFlip.jpg')} resizeMode="stretch" style={{borderRadius:8, flex:1, width:null, height:null, alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:28}}>The Back</Text>
      </Image>
    </FlipCard>
    </ TouchableOpacity>
    )}else if(x.occupied){
        return(
          <TouchableOpacity >
          <FlipCard 
          style={{ width:width/3 - 20, margin:10, borderWidth:0}}
          clickable={false}
          >
      {/* Face Side */}
      <Image source={require('../images/cardBack.jpg')} resizeMode="stretch" style={{borderRadius:8, flex:1, width:null, height:null, alignItems:'center', justifyContent:'center'}}>
        <Image source={vegeta.team} resizeMode="contain" style={{height:210, width:210}} />
      </Image>
      {/* Back Side */}
      <Image source={require('../images/cardFlip.jpg')} resizeMode="stretch" style={{borderRadius:8, flex:1, width:null, height:null, alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:28}}>The Back</Text>
      </Image>
    </FlipCard>
    </ TouchableOpacity>
    )}else{
        return(
          <TouchableOpacity >
          <FlipCard 
          style={{ width:width/3 - 20, margin:10, borderWidth:0}}
          clickable={false}
          >
      {/* Face Side */}
      <Image source={require('../images/cardBack.jpg')} resizeMode="stretch" style={{borderRadius:8, flex:1, width:null, height:null, alignItems:'center', justifyContent:'center'}}>
      </Image>
      {/* Back Side */}
      <Image source={require('../images/cardFlip.jpg')} resizeMode="stretch" style={{borderRadius:8, flex:1, width:null, height:null, alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:28}}>The Back</Text>
      </Image>
    </FlipCard>
    </ TouchableOpacity>
    )}
  }

  render() {
    return (
      <Image source={require('../images/namek.jpg')} style={styles.container} >
      <ListView 
      horizontal = {true}
      style={{flex:2}}
      dataSource = {this.state.vegetaCards}
      renderRow={(rowData) => this.cardSet(rowData)}
      />
      <View style={{flex:4}} />
      <ListView 
      horizontal = {true}
      style={{flex:2}}
      dataSource = {this.state.team}
      renderRow={(rowData) => this.cardSet(rowData)}
      />
      <View style={{flex:1, justifyContent:'space-around', flexDirection:'row'}}>
      <View style={{width:100,}}>
      <Text style={{color:'#fff', width:100, height:30, fontWeight:'800', margin:3, textAlign:'center', fontSize:30}}>{this.state.heros[0].name}</Text>
      <Text style={{color:"#fff", margin:3, fontSize:25, textAlign:'center'}}>{this.state.character1}/{this.state.heros[0].health}</Text>
      </View>
      <View style={{width:100,}}>
      <Text style={{color:'#fff', width:100, height:30, fontWeight:'800', margin:3, textAlign:'center', fontSize:30}}>{this.state.heros[1].name}</Text>
      <Text style={{color:"#fff", margin:3, fontSize:25, textAlign:'center'}}>{this.state.character2}/{this.state.heros[1].health}</Text>
      </View>
      <View style={{width:100,}}>
      <Text style={{color:'#fff', width:100, height:30, fontWeight:'800', margin:3, textAlign:'center', fontSize:30}}>{this.state.heros[2].name}</Text>
      <Text style={{color:"#fff", margin:3, fontSize:25, textAlign:'center'}}>{this.state.character3}/{this.state.heros[2].health}</Text>
      </View>
      </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:null,
    paddingTop:20,
    width:null,
    justifyContent:'space-between'
}}
);

