import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

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
      search: '',
    };
  }

  // componentDidMount() {
  //   let data = {
  //     searchChannel: 'react.js',
  //   };
  //   this.props.getChannelsData(data);
  //   console.log('this.props', this.props.channels);
  // }

  setChannel = data => {
    console.log('data', data);
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
    console.log('state', this.state.items);
    return (
      <View style={styles.container}>
        <Header />
        <SearchChannelsComponent
          setChannel={this.setChannel}
          searchChannelsData={this.searchChannelsData}
        />
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
    backgroundColor: '#282828',
  },
});

const mapStateToProps = state => ({
  channels: state.channels,
});

export default connect(mapStateToProps, {getChannelsData, getNextPageData})(
  App,
);
