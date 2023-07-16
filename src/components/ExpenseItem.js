import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle} from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleIncrement = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'INCREMENT',
            payload: item,
        });
    };

    const handleDecrement = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DECREMENT',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.allocatedBudget}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncrement}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDecrement}></FaMinusCircle></td>
        <td><FaTimesCircle size='2.2em' onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;