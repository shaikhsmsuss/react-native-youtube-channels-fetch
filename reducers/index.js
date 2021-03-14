import {combineReducers} from 'redux';
import channelsReducer from './channelsReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  channels: channelsReducer,
  errors: errorReducer,
});
