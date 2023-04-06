import React from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { FaMoneyBill } from 'react-icons/fa';

// hooks
import useMediaQuery from '../../hooks/useMediaQuery';

// components
import AmountBlurb from './AmountBlurb';

type Props = {
  balance: number;
  income: number;
  expense: number;
};

const Amounts = ({ balance, income, expense }: Props) => {
  const isAboveTabletScreen = useMediaQuery('(min-width: 865px)');

  return (
    <section
      className={`flex items-center justify-between w-11/12 max-w-screen-sm mx-auto py-10 ${
        isAboveTabletScreen ? 'flex-row ' : 'flex-col gap-4 '
      }`}
    >
      <AmountBlurb
        type='Account Balance'
        value={balance.toString()}
        icon={<FaMoneyBill className='w-10 h-10' />}
        typeColour='text-gray-400'
      />
      <AmountBlurb
        type='Income'
        value={income.toString()}
        icon={<FiArrowDown className='w-10 h-10 text-green-500' />}
        typeColour='text-white'
        bgColour='bg-green-500'
        valueColour='text-white'
      />
      <AmountBlurb
        type='Expenses'
        value={expense.toString()}
        icon={<FiArrowUp className='w-10 h-10 text-red-500' />}
        typeColour='text-white'
        bgColour='bg-red-500'
        valueColour='text-white'
      />
    </section>
  );
};

export default Amounts;
