import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SpendSoFar = () => {
    const { expenses, Location, Budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.allocatedBudget));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spend so far: {Location}{totalExpenses}</span>
        </div>
    );
};

export default SpendSoFar;