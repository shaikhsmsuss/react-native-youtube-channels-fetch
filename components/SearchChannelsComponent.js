import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class SearchChannelsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onChange = textValue => {
    console.log('tex', textValue);
    this.props.setChannel(textValue);
  };

  onSearch = () => {
    this.props.searchChannelsData();
  };

  render() {
    return (
      <View style={styles.search}>
        <TextInput
          placeholder="search channels"
          style={styles.input}
          onChangeText={this.onChange}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity>
          <Icon
            name="search"
            size={35}
            color="#AAAAAA"
            style={styles.icon}
            onPress={this.onSearch}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#181818',
  },
  input: {
    height: 50,
    width: 350,
    color: '#AAAAAA',
  },
});
