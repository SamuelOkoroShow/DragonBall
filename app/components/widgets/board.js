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
export default class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:0
    }
  }

  render() {
    return (
      <Image source={require('../..images/namek.jpg')} style={styles.container} resizeMode="contain" >
      
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  height:null,
  width:null
}}
);

