import axios from 'axios';
import {
  GET_CHANNELS_DATA,
  GET_ERRORS,
  SET_NEXTPAGE_TOKEN,
  GET_NEXT_PAGE_DATA,
  SET_LOADING,
} from './types';

import {YOUTUBE_API_KEY} from '@env';

export const getChannelsData = searchChannel => async dispatch => {
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1000&q=${searchChannel}&type=channel&key=${YOUTUBE_API_KEY}`;

  dispatch({
    type: SET_LOADING,
  });

  try {
    const res = await axios.get(url);

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
      payload: error ? error.response.data.error.message : null,
    });
  }
};

export const getNextPageData = data => async dispatch => {
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1000&pageToken=${data.pageToken}&q=${data.searchChannel}&type=channel&key=${YOUTUBE_API_KEY}`;

  try {
    const res = await axios.get(url);

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
