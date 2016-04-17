import { combineReducers } from 'redux';

const initialState = {
  words: [{id: 0, text: 'salut'}, {id: 1, text: 'le monde'}],
}

function dicoApp(state = initialState, action) {
  return state;
}

export default dicoApp;
