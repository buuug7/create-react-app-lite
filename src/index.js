import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootDom = document.createElement('div');
rootDom.id = 'root';
document.body.append(rootDom);


ReactDOM.render(<App/>, document.querySelector('#root'));
