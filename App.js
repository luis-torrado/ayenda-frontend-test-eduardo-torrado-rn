import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Main from "./App/Main";
export default class App extends React.Component {
  render() {
    //Running out of Expo
    return (
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    );

    /* //Using Expo Go
    return (
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
        <Main />
      </SafeAreaView>
    ); */
  }
}
