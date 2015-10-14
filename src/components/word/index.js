import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="dc-list__word">
        <p>{this.props.word.label}</p>
        <p>créé par {this.props.word.creator} le {this.props.word.created_at}</p>
      </div>
    );
  }
})
