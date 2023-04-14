import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import Transactions from './components/transactions';
import IncomeForm from './components/income';
import ExpenseForm from './components/expense';

// extras
import { ITransactionType, IAmountValues } from './utils/types';

const initialAmountValues: IAmountValues = {
  balance: 0,
  income: 0,
  expenses: 0,
};

const App = () => {
  const [amountValues, setAmountValues] =
    useState<IAmountValues>(initialAmountValues);
  const [transactions, setTransactions] = useState<ITransactionType[]>([]);

  return (
    <>
      <Header />

      <main>
        {/* Amounts */}
        <Amounts
          balance={amountValues.income}
          income={amountValues.income}
          expense={amountValues.expenses}
        />

        <div className='max-w-screen-lg mx-auto px-4 flex flex-col gap-4 md:flex-row'>
          <IncomeForm setTransactions={setTransactions} />
          <ExpenseForm />
        </div>

        {/* Transactions */}
        <Transactions transactions={transactions} />
      </main>
      <ToastContainer position='top-center' />
    </>
  );
};

export default App;
