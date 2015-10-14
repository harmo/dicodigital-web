import React from 'react';
import Word from '../word';

export default React.createClass({
  render() {
    var words = this.props.words.map((word, index) => {
      var word = <Word word={word} />;
      return (
        <div className="mdl-cell mdl-cell--3-col" key={index}>
          {word}
        </div>
      )
    });
    return (
      <div className="mdl-grid">
        {words}
      </div>
    );
  }
});
