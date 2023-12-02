import React from 'react'
import PropTypes from 'prop-types';
import './Input.css';
const Input = (props) => {
    
  return (
    <div className='group'>
        
        <input type='text' value={props.amount} onChange={e=>props.onAmountChange(e.target.value)} autoFocus/>
        
        <select value={props.currency} onChange={e=>props.onCurrency1Change(e.target.value)}>
            {props.currencies.map((currency, index) => (
            <option key={index} value={currency.code}>
                {currency.code}
            </option>
            ))}
        </select>


        <p>{props.result}</p>

        <select value={props.currency2} onChange={e=>props.onCurrency2Change(e.target.value)}>
            {props.currencies.map((currency, index) => (
                <option key={index} value={currency.code}>
                    {currency.code}
                </option>
            ))}
        </select>
    </div>
  )
}



export default Input