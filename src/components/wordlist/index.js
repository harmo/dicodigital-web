import React from 'react';
import fetch from 'node-fetch';
import WordGrid from '../wordgrid';

export default React.createClass ({
  getInitialState() {
    return { words: [] };
  },
  fetch(url) {
    fetch(url).then(response => {
      return response.json();
    }).then(json => this.setState({ words: json.results, next: json.next, previous: json.previous }));
  },
  componentDidMount() {
    this.fetch(this.props.url);
  },
  render() {
    return (
      <div className="content">
        <WordGrid words={this.state.words} />
        <div className="dc-navigation" style={{textAlign: 'center'}}>
          <div className="dc-navigation__button" style={{display: 'inline-block', padding: '0 20px'}}>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.previousHandler}>Previous</button>
          </div>
          <div className="dc-navigation__button" style={{display: 'inline-block', padding: '0 20px'}}>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.nextHandler}>Next</button>
          </div>
        </div>
      </div>
    )
  },
  nextHandler(event) {
    this.fetch(this.state.next);
  },
  previousHandler(event) {
    this.fetch(this.state.previous);
  }
});
