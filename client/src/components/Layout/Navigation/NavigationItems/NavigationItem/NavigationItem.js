import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationItem.scss';

const navigationItem = (props) => (
    <li className="NavigationItem">
        <Link
            to={props.link}
            className={props.active ? classes.active : null}>
            {props.children}
        </Link>
    </li>
);

export default navigationItem;