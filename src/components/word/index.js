import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card__title--dark">
          <div className="mdl-card__title-text">{this.props.word.label}</div>
        </div>
        <div className="mdl-card__supporting-text">{this.props.word.definitions[0].text}</div>
        <div className="mdl-card__actions mdl-card--border">
          <a href="" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">{this.props.word.creator}</a>
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"><i className="material-icons">share</i></button>
        </div>
      </div>
    );
  }
})
