import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class LoginFormComp extends Component<{}> {

  _navigateHome(){
    Actions.home();
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
        />
        <TextInput 
          style={styles.textBox} 
          secureTextEntry={true}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Password'
          placeholderTextColor='#ffffff'
          selectionColor='#ffffff'
        />
        <TouchableOpacity onPress={this._navigateHome} style={styles.btn}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
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

});
