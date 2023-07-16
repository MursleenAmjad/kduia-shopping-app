import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { AppProvider } from './context/AppContext';
import Remaining from './components/Remaining';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import Budget from './components/Budget';
import SpendSoFar from './components/SpendSoFar';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'> 
                <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <SpendSoFar />
                    </div>
                    <div className='col-sm'>
                        <Location />
                    </div>
                </div>
                <h3 className='mt-3'>Allocated Budget</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Add Items</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ItemSelected/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;