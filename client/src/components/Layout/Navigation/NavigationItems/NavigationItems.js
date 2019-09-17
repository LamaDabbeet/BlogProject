import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" exact>Posts</NavigationItem>
        <NavigationItem link="/new-post" exact>New Post</NavigationItem>
        <NavigationItem link="/info" exact>Info</NavigationItem>
    </ul>
);

export default navigationItems;