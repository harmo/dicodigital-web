import React, { PropTypes } from 'react';
import Word from './Word';

const WordsList = ({ words }) => (
  <div>
    {words.map(word =>
      <Word key={word.id} {...word} />
    )}
  </div>
);

export default WordsList;
