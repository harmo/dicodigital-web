import React from 'react';
import ReactDOM from 'react-dom';
import Words from './components/words';

ReactDOM.render(<Words baseUrl="https://dicodigital-api.herokuapp.com/word/?format=json" />, document.getElementById('example'));
