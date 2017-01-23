// Redux module implemented in ducks style : https://github.com/erikras/ducks-modular-redux

// Actions
const SYNC_INCREMENT = 'counter/SYNC_INCREMENT';
const SYNC_DECREMENT = 'counter/SYNC_DECREMENT';

// Reducer
const initialState = {
  value: 0,
};
export default function reducer(state = initialState, action = {}) {
  const { value } = state;
  switch (action.type) {
    case SYNC_INCREMENT :
      return { ...state, value: value + 1 };
    case SYNC_DECREMENT :
      return { ...state, value: value - 1 };
    default :
      return state;
  }
}

// Action creators
export function increment() {
  return {
    type: SYNC_INCREMENT,
  };
}

export function decrement() {
  return {
    type: SYNC_DECREMENT,
  };
}
