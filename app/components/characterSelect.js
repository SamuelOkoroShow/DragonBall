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
  ListView,
  Image,
  LayoutAnimation,
  ScrollView,
  Dimensions,
  Animated,
  TouchableOpacity,
  View
} from 'react-native';
var i = 0;

var {height, width} = Dimensions.get('window');
var i;
var selectedChars = []

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import Nav from "./widgets/nav"


export default class Splash extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:0,
      character: this.props.characters[0],
      dataSource: ds.cloneWithRows(this.props.characters),
      selected: ds.cloneWithRows(selectedChars),
      sorted:false
    }
  }
  componentWillMount(){
    this._animatedValue = new Animated.Value(0);
  }

 componentDidMount() {
    Animated.timing(this._animatedValue, {
        toValue: -2500,
        duration: 80500
    }).start();
  }

  characterSelect(x){
    this.setState({
      character:x
    })
    if(selectedChars.length < 3){
      selectedChars.push(x)
      if(selectedChars.length == 3){
        this.setState({
              sorted:true
            })
      }
    }else{

      selectedChars[i] = x;
      i++;
      if(i > 2){
        i = 0
      }
    }
    this.setState({
      selected: ds.cloneWithRows(selectedChars),
    })
  }

  fight(){
      if(this.state.sorted){
      return(
         <TouchableOpacity style={{flex:0}}>
        <Image source={require('../images/fight.png')} resizeMode="contain" style={{height:80, width:130, margin:10}} />
        </TouchableOpacity>
        )}else{
        return(<View />)
        }
  }

  eachTab(x){
    return(
      <TouchableOpacity onPress = {() => this.characterSelect(x)} style={{backgroundColor:'rgba(0,0,0,0.4)', width:120, justifyContent:'center', alignItems:'center', borderRadius:5, padding:20, margin:5}}>
      <Image source = {x.team} resizeMode="contain" style={{height:100,width:100}} />
      </TouchableOpacity>)
  }
  eachChar(x){
    return(
      <View style={{ width:120, justifyContent:'center', alignItems:'center', borderRadius:5,}}>
      <Image source = {x.attack1.image} resizeMode="contain" style={{height:150,width:150}} />
      </View>)
  }

  render() {
    return (
      <View style={{flex:1}} >
      <Animated.Image source={require('../images/background.jpg')} resizeMode="cover" style={{position:'absolute', left:0, top:0, width:width*4+160, height:height, transform: [{translateX: this._animatedValue}] }} />
      <Image source = {this.state.character.image} resizeMode="contain" style={{height:height/2 + 100, width:width/2 + 100, position:'absolute', left:210, top:150}} /> 
      <Nav />
      <ListView
      dataSource={this.state.dataSource}
      style={{flex:1}}
      renderRow={(rowData) => this.eachTab(rowData)}
      />
      <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{color:'#e7e7e7', fontWeight:'900', margin:10, shadowColor: "#000000", shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { height: 3, width: 0 }, fontSize:80}}>{this.state.character.name.toUpperCase()}</Text>
     <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
       <ListView
      dataSource={this.state.selected}
      horizontal = {true}
      style={{width:200}}
      renderRow={(rowData) => this.eachChar(rowData)}
      />
     {this.fight()}
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

}}
);

