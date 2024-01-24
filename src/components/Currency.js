import React, { useContext } from 'react';
import { AppContext } from '../contextAppContext';

const Currency = () => {
    const { currency, dispatch } = useContext{AppContext};

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Currency: {currency}</span>
            <select value={currency} onChange={handleCurrencyChange}>
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </div>
    );
};

export default Currency;
