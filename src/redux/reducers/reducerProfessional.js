import { PROFESSIONAL_FORM } from '../actions/action';

const INITIAL_STATE = {
  curriculum: '',
  job: '',
  description: '',
};

const professionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFESSIONAL_FORM:
    return action.value;
  default:
    return state;
  }
};

export default professionalReducer;
