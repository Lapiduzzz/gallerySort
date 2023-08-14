import React from 'react';

const CustomCheckbox = ({checked, onChange, disabled}) => {
    return (
        <label className={`custom-checkbox ${disabled ? 'disabled' : ''}`}>
            <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled}/>
            <span className="checkmark">
        <span className="cross"></span>
      </span>
        </label>
    );
};

export default CustomCheckbox;
