import React from 'react';
import ReactDOM from 'react-dom';

const reactElement = React.createElement('h1', { className: 'header' }, 'This is React');
ReactDOM.render(
  reactElement,
  document.getElementById('react-application')
);
