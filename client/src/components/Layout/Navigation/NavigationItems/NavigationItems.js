import React from 'react';

import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Posts</NavigationItem>
        <NavigationItem link="/new-post">New Post</NavigationItem>
        <NavigationItem link="/info">Info</NavigationItem>
    </ul>
);

export default navigationItems;