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

export default class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:0
    }
  }

  render() {
    return (
      <View style={styles.container} >
      <TouchableOpacity><Icon name = "more-vert" size={30} color='#fff' style={{margin:5}} /></TouchableOpacity>
      <Image source={require('../../images/ballz.png')} resizeMode ="contain" style={{height:60, width:260, marginTop:10}} />
      <TouchableOpacity><Icon name = "style" size={30} color='#fff' style={{margin:5}} /></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  height:100,
  width:width,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  backgroundColor:'rgba(0,0,0,0.3)'
}}
);

