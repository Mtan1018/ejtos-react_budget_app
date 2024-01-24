import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css'; 

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    }

    return (
        <div className='alert alert-secondary' style={{ backgroundColor:'lightgreen' }}>
            <span>Currency: {currency}</span>
            <select value={currency} onChange={handleCurrencyChange}>
                <option className="select-option" value="$">Dollar ($)</option>
                <option className="select-option" value="£">Pound (£)</option>
                <option className="select-option" value="€">Euro (€)</option>
                <option className="select-option" value="₹">Rupee (₹)</option>

            </select>
        </div>
    );
};

export default Currency;
