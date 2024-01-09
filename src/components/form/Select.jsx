import React from 'react';
import './Select.css';

function Select( {text, name, options, handleOnChange, value} ) {
  return (
    <div className='form_control_select'>
        <label htmlFor={name}>{text}:</label>
        <select name={name} id={name} onChange={handleOnChange} value={value}>
            <option>Selecione uma opção</option>
            {options.map((option) => (
              <option value={option.objectId} key={option.objectId}>{option.name}</option>
            ))}
        </select>
    </div>
  )
}

export default Select