import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Textinput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class SearchChannels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  onChange = textValue => {
    this.setState({search: textValue});
  };

  render() {
    return (
      <View style={styles.search}>
        <Textinput
          placeholder="search channels"
          style={styles.input}
          onChangeText={this.onChange}
        />
        <TouchableOpacity>
          <Icon name="search" size={20} color="#fff" onPress={this.onSearch} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 18,
  },
});

export default SearchChannels;
