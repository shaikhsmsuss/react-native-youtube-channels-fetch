/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.iconStyle}
          source={require('../Collections.png')}
        />
        <Text style={styles.text}>YouTube Channels</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 70,
    padding: 11,
    backgroundColor: '#3D3D3D',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
    paddingLeft: 5,
  },
  iconStyle: {
    height: 40,
    width: 40,
    borderRadius: 7,
  },
});

export default Header;
