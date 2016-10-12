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
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class GameOver extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:0
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigator.push({id:"character"})} style={styles.container} >
      <Text style={{fontWeight:'900', fontSize:80}}>{this.props.feedback}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  width:width,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
}}
);

