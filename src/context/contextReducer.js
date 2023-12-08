import { CREATE, DELETE } from '../constants/actionTypes';

const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case CREATE:
      transactions = [action.payload, ...state];
      localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;

    case DELETE:
      transactions = state.filter(t => t.id !== action.payload);
      localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;

    default:
      return state;
  }
};

export default contextReducer;
