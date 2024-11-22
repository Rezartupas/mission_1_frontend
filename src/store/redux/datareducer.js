// src/store/redux/dataReducer.js

const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const setData = (data) => ({
  type: 'SET_DATA',
  payload: data,
});

export default dataReducer;
