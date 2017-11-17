import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import { Actions } from 'react-native-router-flux';



export default class SettingsPage extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
      	<Text>SettingsPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
