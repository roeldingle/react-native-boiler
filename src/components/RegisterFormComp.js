import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class RegisterFormComp extends Component<{}> {

  render() {
    return (
      <View style={{ marginTop: 60 }}>
        <TextInput 
          style={styles.textBox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Email'
          placeholderTextColor='#ffffff'
        />
        <TextInput 
          style={styles.textBox} 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Name'
          placeholderTextColor='#ffffff'
        />
        <TextInput 
          style={styles.textBox} 
          secureTextEntry={true}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Password'
          placeholderTextColor='#ffffff'
        />
        <TextInput 
          style={styles.textBox} 
          secureTextEntry={true}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Re-Password'
          placeholderTextColor='#ffffff'
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  textBox: {
    width: 290,
    height: 44,
    backgroundColor: '#fa5788',
    paddingHorizontal: 16,
    marginVertical: 8,
    color: '#ffffff',
    fontSize: 16
  },
  btn: {
    width: 290,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8c0032',
    paddingVertical: 12
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff'
  },

});
