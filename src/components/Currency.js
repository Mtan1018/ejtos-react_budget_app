import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        let newCurrency = event.target.value;

        
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    }

    return (
        <div className='alert alert-info'  style={{backgroundColor:"lightgreen", color:"white"}}>
            <span>Currency: {currency} </span>
            <button className='btn-group'>
            <select className="dropdown-item active" value={currency} onChange={handleCurrencyChange}>
                <option className="dropdown-item active" value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
            </button>
        </div>
    );
};

export default Currency;
