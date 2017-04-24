import {combineReducers} from 'redux';
import admins from './adminReducer';
import gsd from './gsdReducer';
import sailboat from './gsdReducer';

const rootReducer = combineReducers({
    admins, gsd, sailboat
  });

export default rootReducer;
