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
export default class Splash extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:0
    }
  }
  componentDidMount(){
    setTimeout( () => this.props.navigator.push({id:"character"}), 3000);
  }
  render() {
    return (
      <View style={styles.container} >
            <Image source ={require('../images/vegetaSplash.png')} resizeMode="contain" style={{height:400, width:400}} />
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

