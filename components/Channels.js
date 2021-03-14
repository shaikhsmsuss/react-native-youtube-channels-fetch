import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';

class Channels extends Component {
  onPress = id => {
    Linking.openURL('vnd.youtube://channel/' + id).catch(error => {
      console.log('errr', error);
    });
  };
  render() {
    let channelId = this.props.item.id.channelId;
    return (
      <TouchableOpacity
        style={styles.listitem}
        onPress={() => this.onPress(channelId)}>
        <View style={styles.llistViewItem}>
          <Image
            style={styles.thumbnail}
            source={{uri: this.props.item.snippet.thumbnails.default.url}}
          />
          <Text style={styles.listItemText}>
            {this.props.item.snippet.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listitem: {
    padding: 15,
    backgroundColor: '#212121',
    borderBottomWidth: 1,
    borderColor: '#404040',
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    marginLeft: 10,
  },
  llistViewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    width: '50%',
    margin: 30,
  },
});

export default Channels;
