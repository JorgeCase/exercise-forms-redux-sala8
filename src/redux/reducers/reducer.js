import { PERSONAL_FORM } from '../actions/action';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_FORM:
    return action.value;
  default:
    return state;
  }
};

export default personalReducer;
