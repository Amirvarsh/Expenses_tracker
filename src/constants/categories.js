const incomeColor = [
  '#e8f5e9',
  '#c8e6c9',
  '#a5d6a7',
  '#81c784',
  '#66bb6a',
  '#4caf50',
  '#43a047',
  '#388e3c',
  '#2e7d32',
  '#1b5e20',
];
const expenseColor = [
  '#ffebee',
  '#ffcdd2',
  '#ef9a9a',
  '#e57373',
  '#ef5350',
  '#f44336',
  '#e53935',
  '#d32f2f',
  '#c62828',
  '#b71c1c',
  '#b50d12',
];

export const incomeCategories = [
  { type: 'Salary', amount: 0, color: incomeColor[7] },
  { type: 'Savings', amount: 0, color: incomeColor[6] },
  { type: 'Investments', amount: 0, color: incomeColor[5] },
  { type: 'Extra Income', amount: 0, color: incomeColor[4] },
  { type: 'Lottery', amount: 0, color: incomeColor[3] },
  { type: 'Gifts', amount: 0, color: incomeColor[2] },
  { type: 'Rental Income', amount: 0, color: incomeColor[1] },
  { type: 'Other', amount: 0, color: incomeColor[0] },
];

export const expenseCategories = [
  { type: 'Rent', amount: 0, color: expenseColor[9] },
  { type: 'Food', amount: 0, color: expenseColor[8] },
  { type: 'Bills', amount: 0, color: expenseColor[7] },
  { type: 'Internet', amount: 0, color: expenseColor[6] },
  { type: 'Transports', amount: 0, color: expenseColor[5] },
  { type: 'Pets', amount: 0, color: expenseColor[4] },
  { type: 'Entertainment', amount: 0, color: expenseColor[3] },
  { type: 'Travels', amount: 0, color: expenseColor[2] },
  { type: 'Clothes', amount: 0, color: expenseColor[1] },
  { type: 'Other', amount: 0, color: expenseColor[0] },
];

export const INCOME = 'Income';
export const EXPENSE = 'Expense';

export const totalTypes = [
  { type: INCOME, amount: 0, color: incomeColor[9] },
  { type: EXPENSE, amount: 0, color: expenseColor[9] },
];

export const resetCategories = () => {
  incomeCategories.forEach(c => (c.amount = 0));
  expenseCategories.forEach(c => (c.amount = 0));
};
