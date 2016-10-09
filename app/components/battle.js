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

var {height, width} = Dimensions.get('window');
var i;
// Every Character gets a turn to move and a turn to attack.
const empty = "empty";
const occupied = "occupied"
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
  updateBoard(){}
  updateHealth(){}

  render() {
    return (
      <View style={styles.container} >
            <Image source ={require('../images/vegetaSplash.png')} resizeMode="contain" style={{height:300, width:300}} />
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

