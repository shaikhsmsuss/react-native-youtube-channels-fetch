import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RemoveIcon from 'react-native-vector-icons/dist/AntDesign';
export default class SearchChannelsComponent extends Component {
  constructor(props) {
    super(props);

    this.myTextInput = React.createRef();
  }

  onChange = textValue => {
    this.props.setChannel(textValue);
  };

  onSearch = () => {
    this.props.searchChannelsData();
  };

  clearInput = () => {
    this.myTextInput.current.clear();
  };

  render() {
    return (
      <View style={styles.search}>
        <TextInput
          placeholder="Search YouTube Channels..."
          style={styles.input}
          onChangeText={this.onChange}
          placeholderTextColor="#AAAAAA"
          ref={this.myTextInput}
        />
        <TouchableOpacity>
          <RemoveIcon
            name="close"
            size={25}
            color="#AAAAAA"
            style={styles.closeButton}
            onPress={this.clearInput}
          />
        </TouchableOpacity>
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
    width: '79%',
    color: '#AAAAAA',
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});
