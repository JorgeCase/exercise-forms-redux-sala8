import { combineReducers } from 'redux';
import personalReducer from './reducer';
import professionalReducer from './reducerProfessional';

const rootReducer = combineReducers({
  personalReducer,
  professionalReducer,
});

export default rootReducer;
