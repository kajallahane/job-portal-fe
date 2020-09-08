import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addJobRequest } from '../../server/Server'

export default function OutlinedCard(props) {

  async function createJobRequest() {
    let candidate = sessionStorage.getItem("candidateData")
    candidate = JSON.parse(candidate)
    const jobRequestId = Math.floor(Math.random() * 100000)
    const jobRequestObj = { "candidateDetails": candidate, "jobDetails": props, "jobRequestId": jobRequestId.toString(), "jobRequestStatus": ["Applied"] }
    const response = await addJobRequest(jobRequestObj)
    alert(response)
  }

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
        <Button onClick={() => createJobRequest()} size="small">Apply</Button>
      </CardActions>
    </Card>
  );
}