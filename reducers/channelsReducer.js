import {
  GET_CHANNELS_DATA,
  SET_NEXTPAGE_TOKEN,
  GET_NEXT_PAGE_DATA,
} from '../actions/types';

const initialState = {
  channels: [],
  nextPageToken: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHANNELS_DATA:
      return {
        ...state,
        channels: action.payload,
      };
    case SET_NEXTPAGE_TOKEN:
      return {
        ...state,
        nextPageToken: action.payload,
      };
    case GET_NEXT_PAGE_DATA:
      return {
        ...state,
        channels: [...state.channels, ...action.payload],
      };
    default:
      return state;
  }
}
