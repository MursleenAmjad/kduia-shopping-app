import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, Location, Budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.allocatedBudget));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Remaining: {Location}{Budget-totalExpenses}</span>
        </div>
    );
};

export default Remaining;