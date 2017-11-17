import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class LogoComp extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.logo}
          source={require('../images/logo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 10,
    flexDirection: 'row',
  },
  logo: {
    width: 70,
    height: 70,
    marginHorizontal: 2
  },
  textLogo: {
    color: '#ffffff',
    fontFamily: 'Consolas',
    fontSize: 22
  },
});
