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
 
  const {jobrequest} = props
  return (
    <Card  variant="outlined" onClick={ () => { 
        sessionStorage.setItem('jobDetails', JSON.stringify(jobrequest));
        props.history.push("/requestStatusDeatils/?id=567")
       
      }}>
      <CardContent>
        <Typography variant="h5" component="h5">
            {jobrequest.jobDetails.title} . {jobrequest.jobDetails.location} . {jobrequest.jobDetails.experience}
        </Typography>
        <Typography variant="h5" component="h5">
            {jobrequest.candidateDetails.name} |  {jobrequest.candidateDetails.emailId} | {jobrequest.candidateDetails.contact} | {jobrequest.candidateDetails.experience} | {jobrequest.candidateDetails.noticePeriod}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Apply</Button>
      </CardActions> */}
    </Card>
  );
}