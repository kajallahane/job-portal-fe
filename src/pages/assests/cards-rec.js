import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function RequestCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}> • </span>;
  return (
    <Card className={classes.root} variant="outlined" onClick={ () => { props.history.history.push("/requestStatusRec")}}>
      <CardContent>
        <Typography variant="h5" component="h5">
            {props.title}{bull}{props.location}{bull}{props.experience}
        </Typography>
        <Typography variant="h5" component="h5">
            {props.candidateName}{bull}{props.mobileNo}{bull}{props.experience}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Apply</Button>
      </CardActions> */}
    </Card>
  );
}