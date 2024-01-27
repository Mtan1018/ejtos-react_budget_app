import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle color="green" size='2em' onClick={() => increaseAllocation(props.name)}>+</FaPlusCircle></td>
            <td><FaMinusCircle color="red" size='2em' onClick={() => decreaseAllocation(props.name)}>-</FaMinusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
