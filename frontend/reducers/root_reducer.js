import {combineReducers} from 'redux';
import {sessionReducer} from './session_reducer';
import {sessionErrorsReducer} from './session_errors_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: sessionErrorsReducer
});

export default rootReducer;
