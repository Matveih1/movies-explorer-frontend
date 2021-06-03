import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <label className="switch">
            <input className="switch__input" type="checkbox"></input>
            <span className="switch__slider"></span>
        </label>

    )
}

export default FilterCheckbox;