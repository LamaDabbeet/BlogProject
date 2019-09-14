import React from 'react';

import './Button.scss';

const Button = (props) => ( < button className = "Button btnType"
    onClick = {
        props.clicked
    } type={props.type}> {
        props.children
    } </button>
);

export default Button;