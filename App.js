import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {connect} from 'react-redux';

import Channels from './components/Channels';
import Header from './components/Header';
import {getChannelsData, getNextPageData} from './actions/channelsAction';
import SearchChannels from './components/SearchChannels';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    let data = {
      searchChannel: 'travel',
    };
    this.props.getChannelsData(data);
    console.log('this.props', this.props.channels);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.channels.channels !== this.props.channels.channels) {
      this.setState({
        items: [...this.state.items, ...this.props.channels.channels],
      });
    }
  }

  handleLoadMore = async () => {
    let {nextPageToken} = this.props.channels;
    let data = {
      pageToken: nextPageToken,
      searchChannel: 'travel',
    };
    await this.props.getNextPageData(data);
  };

  render() {
    console.log('state', this.state);
    return (
      <View style={styles.container}>
        <Header />
        <SearchChannels />
        <FlatList
          data={this.state.items}
          renderItem={({item}) => <Channels item={item} />}
          keyExtractor={(item, index) => String(index)}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  channels: state.channels,
});

export default connect(mapStateToProps, {getChannelsData, getNextPageData})(
  App,
);
