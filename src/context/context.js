import React, { createContext, useReducer } from 'react';
import { CREATE, DELETE } from '../constants/actionTypes';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const createTransaction = transaction => {
    dispatch({
      type: CREATE,
      payload: transaction,
    });
  };

  const deleteTransaction = id => {
    dispatch({
      type: DELETE,
      payload: id,
    });
  };

  const balance = transactions.reduce((acc, item) => {
    return item.type === 'Expense'
      ? (acc -= item.amount)
      : (acc += item.amount);
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{
        createTransaction,
        deleteTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
