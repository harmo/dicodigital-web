import React from 'react';
import ReactDOM from 'react-dom';
import WordList from './components/wordlist';

ReactDOM.render(<WordList url="https://dicodigital-api.herokuapp.com/word/?format=json" />, document.getElementById('wordList'));
