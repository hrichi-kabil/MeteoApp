import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View, Text, Button, TextInput, ScrollView, ImageBackground, ShadowPropTypesIOS } from "react-native";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  render() {



    if ((this.props.isLoading)) {
      return (
        <ScrollView style={styles.scrollview}>
          <Text> nothing to show</Text>
        </ScrollView>
      );
    }
    else if (this.props.dataSource.message == "city not found") {
      console.log(this.props.dataSource.message)
      return <View><Text>vide</Text></View>
    }
    else {
      let tempNow = (this.props.dataSource.main.temp - 273.15).toFixed(2);
      let tempMax = (this.props.dataSource.main.temp_max - 273.15).toFixed(2);
      let tempMin = (this.props.dataSource.main.temp_min - 273.15).toFixed(2);
      let situation = this.props.dataSource.weather[0].description;
      let humidity = this.props.dataSource.main.humidity + ' %';
      let visibility = this.props.dataSource.visibility / 1000 + ' KM';
      let winSpeed = this.props.dataSource.wind.speed + ' KM/H';

      if (Date.now() > 1630863915) {
        var time = "night"
      }
      else { var time = "day" }


      return (
        <Animatable.View
          animation="slideInLeft">
          <View style={styles.flex_loc}>
            <Text style={styles.loc} >{this.props.dataSource.name}</Text>
            <Text style={styles.loc}>{tempNow}</Text>
            <Text>{time}</Text>


          </View>
          <View>
            <ScrollView style={styles.scrollview}
            >
              <View style={styles.item}><Text>tempMax: {tempMax}</Text></View>
              <View style={styles.item}><Text>tempMin: {tempMin}</Text></View>
              <View style={styles.item}><Text>situation: {situation}</Text></View>
              <View style={styles.item}><Text>humidity: {humidity}</Text></View>
              <View style={styles.item}><Text>visibility: {visibility}</Text></View>
              <View style={styles.item}><Text>winSpeed: {winSpeed}</Text></View>
              {/* <View style={styles.item}><Text>{this.props.test}</Text></View> */}


            </ScrollView>
          </View>
        </Animatable.View>
      );
    }
  }

}



const styles = StyleSheet.create({
  scrollview: {
    borderRadius: 10,
    margin: 4,
    padding: 4

  },
  item: {
    height: 35,
    borderRadius: 10,
    margin: 4,
    padding: 4,
    backgroundColor: 'rgba(40, 40, 52, 0.5)',

  },
  flex_loc: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 50

  },

  loc: {
    fontSize: 30
  },
})
