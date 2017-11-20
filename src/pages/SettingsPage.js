import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import * as firebase from "firebase";

import { Actions } from 'react-native-router-flux';
export default class SettingsPage extends Component<{}> {

  constructor(props){
    super(props);
  }

  _logoutPressed(){
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {text: 'Yes', onPress: () => this._logout() },
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  async _logout() {
      // try {
      //     await firebase.auth().signOut();
      //     // Navigate to login view
      // } catch (error) {
      //     console.log(error);
      // }
      alert("sdhshdhsd");
  }

  render() {
    return (
      <View style={styles.container}>
      	<Text>SettingsPage</Text>
        <TouchableOpacity style={styles.btn} onPress={this._logoutPressed}>
          <Text style={styles.btnText}> Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    width: 280,
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8c0032',
    paddingVertical: 10
  },
  btnText: {
    width: 70,
    fontSize: 16,
    justifyContent: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    color: '#ffffff'
  },
});
