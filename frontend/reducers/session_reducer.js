import * as SessionActions from '../actions/session_actions';


const _nullSession = Object.freeze({
  id:null
});

export const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SessionActions.RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case SessionActions.LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
