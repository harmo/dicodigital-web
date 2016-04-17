import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import WordsList from '../components/WordsList';

const mapStateToProps = (state) => {
  return {
    words: state.words,
  }
};

const WordsListContainer = connect(
  mapStateToProps
)(WordsList)

export default WordsListContainer;
