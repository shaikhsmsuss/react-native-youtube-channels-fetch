import axios from 'axios';
import {
  GET_CHANNELS_DATA,
  GET_ERRORS,
  SET_NEXTPAGE_TOKEN,
  GET_NEXT_PAGE_DATA,
} from './types';

export const getChannelsData = data => async dispatch => {
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1000&q=${data.searchChannel}&type=channel&key=AIzaSyAWhRxYRwLglAeeERivHTLyHfIiYAHtw70`;
  try {
    const res = await axios.get(url);
    console.log('dataddd', res.data);
    dispatch({
      type: SET_NEXTPAGE_TOKEN,
      payload: res.data.nextPageToken,
    });
    dispatch({
      type: GET_CHANNELS_DATA,
      payload: res.data.items,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data.errors,
    });
  }
};

export const getNextPageData = data => async dispatch => {
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1000&pageToken=${data.pageToken}&q=${data.searchChannel}&type=channel&key=AIzaSyAWhRxYRwLglAeeERivHTLyHfIiYAHtw70`;
  try {
    const res = await axios.get(url);
    console.log('response', res.data);
    dispatch({
      type: GET_NEXT_PAGE_DATA,
      payload: res.data.items,
    });
    dispatch({
      type: SET_NEXTPAGE_TOKEN,
      payload: res.data.nextPageToken,
    });
  } catch (error) {
    console.log('err', error);
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  }
};