/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const word = this.props.word;
    return (
      <Card>
        <CardHeader title="{word.label}" />
        <CardText>{word.definitions[0].text}</CardText>
      </Card>
    );
  }
}

export default Main;
