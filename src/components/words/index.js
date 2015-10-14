import React from 'react';
import fetch from 'node-fetch';
import Word from '../word';

export default React.createClass ({
  getInitialState() {
    return { data: [] }
  },
  componentDidMount() {
    fetch(this.props.baseUrl).then(response => {
      return response.json();
    }).then(json => this.setState({ data: json.results }));
  },
  render() {
    var wordsList = this.state.data.map((word, index) => {
      return <Word key={index} word={word} />;
    });
    return (
      <div className="dc-list">
        {wordsList}
      </div>
    )
  }
});
