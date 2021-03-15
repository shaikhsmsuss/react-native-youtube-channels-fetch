import {
  GET_CHANNELS_DATA,
  SET_NEXTPAGE_TOKEN,
  GET_NEXT_PAGE_DATA,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  channels: null,
  nextPageToken: '',
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CHANNELS_DATA:
      return {
        ...state,
        channels: action.payload,
        loading: false,
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
        loading: false,
      };
    default:
      return state;
  }
}
