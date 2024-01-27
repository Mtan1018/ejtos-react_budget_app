import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

import '../App.css';

 

const Currency = () => {

  const { currency, dispatch } = useContext(AppContext);

 

  const [orgCurrency, setOrgCurrency] = useState('');

 

  const handleCurrencyChange = (event) => {

    let newCurrency = event.target.value;

    setOrgCurrency(newCurrency);

    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });

  };

 

  return (

    <div

      className="input-group-text alert alert-secondary"
      id="currencySelect"
      style={{ backgroundColor: 'lightgreen', color: 'green' }}

      htmlFor="inputGroupSelect02"


    >

      <span className="currencyBox">Currency: {currency} </span>

      <select

        className="custom-select custom-select-bg"

        id="inputGroupSelect01"

        value={orgCurrency}

        onChange={handleCurrencyChange}

      >

        <option value="$" className="currency-option">Dollar ($)</option>

        <option value="£" className="currency-option">Pound (£)</option>

        <option value="€" className="currency-option">Euro (€)</option>

        <option value="₹" className="currency-option">Rupee (₹)</option>

      </select>

    </div>

  );

};

 

export default Currency;

