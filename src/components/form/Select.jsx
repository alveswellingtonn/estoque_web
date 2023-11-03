import React from 'react';
import './Select.css';

function Select( {text, name, options, handleOnChange, value} ) {
  return (
    <div className='form_control_select'>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name} onChange={handleOnChange} value={value}>
            <option>Selecione uma opção</option>
        </select>
    </div>
  )
}

export default Select