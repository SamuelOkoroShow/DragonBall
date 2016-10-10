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
  TouchableOpacity,
  View
} from 'react-native';

import Board from "./widgets/board"

var {height, width} = Dimensions.get('window');
var i;
// Every Character gets a turn to move and a turn to attack.
const empty = "empty";
const occupied = "occupied"

const affliction = "affliction"
const defence = "defence"
const evasion = "evasion"
const evasionAttack = "evasionAttack"


var tiles1 = [occupied, occupied, occupied, empty, empty,empty]
export default class battle extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:0,
      character1:{
        heath:100,
        tile:0
      },
      character2:{
        heath:100,
        tile:1
      },
      character3:{
        heath:100,
        tile:2
      }
    }
  }
  
  // Action are all right here
  updateCard(){}
  updateBoard(){
    this.setState({
      board : <Board char1 = this.state.character1 char2 = this.state.character2 char3 = this.state.character3 />
    })
  }
  updateHealth(){}
  nextTurn(){}

  action(type, tile, attack, defence){
    if(type == )
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

  render() {
    return (
      <View style={styles.container} >
      <Board card1
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#e7e7e7'
}}
);

