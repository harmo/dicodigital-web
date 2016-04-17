import React from 'react';
import Word from '../word';

export default React.createClass({
  render() {
    const words = this.props.words.map((word, index) => {
      const word = <Word word={word} />;
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
  },
});
