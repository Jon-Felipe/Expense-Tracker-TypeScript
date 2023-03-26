import React, { useState } from 'react';

// components
import Header from './components/Header';
import Amounts from './components/amounts';
import Transactions from './components/transactions';
import TransactionModal from './components/transactions/TransactionModal';

// extras
import ITransactionType from './utils/types';
import { transactions as dummyTransactions } from './utils/transactions';

const App = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [transactions, setTransactions] =
    useState<ITransactionType[]>(dummyTransactions);

  const handleAddTransaction = () => {
    console.log('add transaction');
  };

  return (
    <>
      <Header />

      <main>
        {/* Transaction modal */}
        {isModalOpen && (
          <TransactionModal
            setModalIsOpen={setModalOpen}
            handleAddTransaction={handleAddTransaction}
          />
        )}

        {/* Amounts */}
        <Amounts />

        {/* Transactions */}
        <Transactions
          setModalIsOpen={setModalOpen}
          transactions={transactions}
        />
      </main>
    </>
  );
};

export default App;
