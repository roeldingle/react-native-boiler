import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import * as firebase from "firebase";
firebase.initializeApp({
      apiKey: "AIzaSyArNSKCb_JKdEgtMTYhjqW0siNc2vOFEKA",
      authDomain: "fireboiler-22aa4.firebaseapp.com",
      databaseURL: "https://fireboiler-22aa4.firebaseio.com",
      projectId: "fireboiler-22aa4",
      storageBucket: "fireboiler-22aa4.appspot.com",
});

export default class LoginFormComp extends Component<{}> {

  constructor(props){
    super(props);
    this.state ={
      email : '',
      pass: '',
      loading: false
    }

  }

  _navigateHome(){
    Actions.home();
  }

  async _login() {
    this.setState({loading: true});
      try {
          await firebase.auth()
              .signInWithEmailAndPassword(this.state.email, this.state.pass);
              this.setState({loading: false});
              Actions.home();
          // Navigate to the Home page
      } catch (error) {
          this.setState({loading: false});
          alert(error.toString())
      }
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Email'
          placeholderTextColor='#ffffff'
          selectionColor='#ffffff'
          keyboardType='email-address'
          onChangeText={ (text)=>this.setState({email: text}) }
        />
        <TextInput
          style={styles.textBox}
          secureTextEntry={true}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Password'
          placeholderTextColor='#ffffff'
          selectionColor='#ffffff'
          onChangeText={ (text)=>this.setState({pass: text}) }
        />
        <TouchableOpacity onPress={this._login.bind(this)} style={styles.btn}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>

        {this.state.loading &&
            <View style={styles.loading}>
              <ActivityIndicator size='large' />
              <Text>Loading</Text>
            </View>
        }


      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBox: {
    width: 280,
    height: 44,
    backgroundColor: '#fa5788',
    paddingHorizontal: 16,
    marginVertical: 6,
    color: '#ffffff',
    fontSize: 14
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
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

});
