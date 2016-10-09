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
export default class battle extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:0
    }
  }
  
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

