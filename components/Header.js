/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=travel&type=channel&key=AIzaSyAWhRxYRwLglAeeERivHTLyHfIiYAHtw70

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.iconStyle}
          source={require('../Collections.png')}
        />
        <Text style={styles.text}>Channels</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    padding: 15,
    backgroundColor: '#121212',
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
