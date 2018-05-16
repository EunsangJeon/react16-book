import React from 'react';
import ReactDOM from 'react-dom';

const h1 = React.createElement(
  'h1', 
  { className: 'header', key: 'header' },
  'This is React'
);

const p = React.createElement(
  'p',
  { className: 'content', key: 'content' },
  'And that is how it works.'
);

const reactFragment = [h1, p];

const section = React.createElement(
  'section',
  { className: 'container' },
  reactFragment
);

ReactDOM.render(
  section,
  document.getElementById('react-application')
);
