import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, ScrollView, ImageBackground, TouchableNativeFeedback } from "react-native";

export default class Location extends React.Component  {
  constructor(props) {
    super(props);
  
   
}
}





const styles = StyleSheet.create({
  BigView: {
    backgroundColor: "#afffff",
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
