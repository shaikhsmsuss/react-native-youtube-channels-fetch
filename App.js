import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import {connect} from 'react-redux';

import Channels from './components/Channels';
import Header from './components/Header';
import {getChannelsData, getNextPageData} from './actions/channelsAction';
import SearchChannelsComponent from './components/SearchChannelsComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      search: 'react native',
    };
  }

  async componentDidMount() {
    await this.props.getChannelsData(this.state.search);
  }

  setChannel = data => {
    this.setState({search: data});
  };

  searchChannelsData = () => {
    this.props.getChannelsData(this.state.search);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.channels.channels !== this.props.channels.channels) {
      this.setState({
        items: this.props.channels.channels,
      });
    }
  }

  handleLoadMore = async () => {
    let {nextPageToken} = this.props.channels;
    let data = {
      pageToken: nextPageToken,
      searchChannel: this.state.search,
    };
    await this.props.getNextPageData(data);
  };

  render() {
    let {loading} = this.props.channels;

    return (
      <View style={styles.container}>
        <Header />
        <SearchChannelsComponent
          setChannel={this.setChannel}
          searchChannelsData={this.searchChannelsData}
        />
        {loading ? (
          <View style={styles.indicator}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : this.props.channels.channels ? (
          <View>
            <FlatList
              data={this.state.items}
              renderItem={({item}) => <Channels item={item} />}
              keyExtractor={(item, index) => String(index)}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={0.3}
            />
          </View>
        ) : (
          <View>
            <Text>Oops!!! Something went wrong</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
  },
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    color: '#AAAAAA',
  },
});

const mapStateToProps = state => ({
  channels: state.channels,
});

export default connect(mapStateToProps, {getChannelsData, getNextPageData})(
  App,
);
