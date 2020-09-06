import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function OutlinedCard(props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.company}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title} . {props.location} . {props.expectedExperience}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
      </CardActions>
    </Card>
  );
}