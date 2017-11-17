import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import LogoComp from '../components/LogoComp';
import RegisterFormComp from '../components/RegisterFormComp';


export default class RegisterPage extends Component<{}> {

  _navigateLogin(){
    Actions.login();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#8c0032"
           barStyle="light-content"
         />
      	<LogoComp/>
      	<RegisterFormComp/>
      	<View style={styles.footer}>
         
          <TouchableOpacity onPress={this._navigateLogin}>
            <Text style={styles.txtLinkFooter}> Signin</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2185b',
  },
  footer: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 16
  },
  txtFooter: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  txtLinkFooter: {
    color: '#ffffff',
    fontSize: 16,
  },
});
