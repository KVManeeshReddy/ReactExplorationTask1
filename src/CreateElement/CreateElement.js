import React from 'react';

const createElement = () => {
    return React.createElement('div', null , React.createElement( 'h1', null , 'This is a create element component'));
}

export default createElement;