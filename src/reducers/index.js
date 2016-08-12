import {combineReducers} from 'redux';
import courses from './courseReducer';

//  To club all the reducers at one point
// rootReducer will call all the other reducers using {combineReducers} feature
const rootReducer = combineReducers({
  courses
  //  In case of any more reducers involved here, write courses, like, comment, ...
});

export default rootReducer;
