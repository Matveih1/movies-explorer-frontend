import React from 'react';

import './TextBlock.css';

function TextBlock(props) {
    return (
        <div className="text-block">
            <h3 className="text-block__title">{props.title}</h3>
            <p className="text-block__text">{props.text}</p>
        </div>
                
    )
}

export default TextBlock;
