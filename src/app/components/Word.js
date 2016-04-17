import React, { PropTypes } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const Word = ({text}) => (
  <Card>
    <CardText>{text}</CardText>
  </Card>
)

export default Word;
