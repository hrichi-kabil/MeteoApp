import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, ScrollView, ImageBackground, ColorPropType } from "react-native";
import Location from './screens/loc';
import Weather from "./screens/weather";
import * as Animatable from 'react-native-animatable';

export default class App extends React.Component {


  state = {
    name: "",
    nameRech:"",
    isLoading: true,
    dataSource: null,
  
  }

 change_state(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.name+',&APPID=d9707bd7d6d666fc7abe9a6424066cd6')
      .then((response) => response.json())
      .then((responseJson) => {

        
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        })
        console.log(this.props.cnt)
      })
      .catch((error) => {
        console.log(error)
   
      }
      )}


  render() {
    return (

      <View style={styles.BigView} >
        <ImageBackground style={{ width: '100%', marginBottom: 5, paddingBottom: 5 }} source={require('./pic.png')}>
          <View style={styles.flex_rech} >
            <View style={styles.T_recherche}>
              <TextInput placeholder="exp: Tunis"
                onChangeText={text => { this.setState({ nameRech: text }) }} />
            </View>
            <View >
              <Button style={styles.btn_recherche}
                onPress={() => {this.setState({ name: this.state.nameRech }),this.change_state() }}
                color='rgba(40, 40, 52, 0.6)'
                title="Recherche" />
            </View>
          </View>
        </ImageBackground>
        {(this.state.name != "") ? (
          <Weather
          dataSource={this.state.dataSource}  isLoading={this.state.isLoading} />) :
          <View><Text>Page 0</Text></View>
        }


      </View>
    );
  }
}
const styles = StyleSheet.create({
  BigView: {
    backgroundColor: "white",
    height: '100%'
  },

  flex_rech: {
    flexDirection: "row",
    marginTop: 100,
    padding: 4,

  },
  T_recherche: {
    borderWidth: 1,
    width: 300,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 20,
    backgroundColor: 'rgba(40, 40, 52, 0.1)',
  },
  btn_recherche: {
    borderRadius: 10,
    borderWidth: 1,
    color: "#afffff",

    backgroundColor: 'rgba(40, 40, 52, 0.1)',
  },






})
