import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  Timeline  from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';

import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    timeline: {
      transform: "rotate(-90deg)"
    },
    timelineContentContainer: {
        textAlign: "left"
    
    },
    timelineContent: {
      display: "inline-block",
      transform: "rotate(-90deg)",
      textAlign: "center",
      minWidth: 50
    },
    timelineIcon: {
      transform: "rotate(-90deg)"
    },
    timelineDot:{
      "background-color": "#34ca22 !important"
    }
  });
  
  export default function RequestTimeline(props) {
    const arrayObj = Object.values(props)
    const classes = useStyles();
  
    return (
        <div>
        <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            { arrayObj.includes("Applied") ? <TimelineDot style={{"background-color": "#34ca22"}}/> : <TimelineDot/>}
            {/* <TimelineDot/> */}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent >Applied</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            {/* <TimelineDot/> */}
            { arrayObj.includes("Conversation") ? <TimelineDot style={{"background-color": "#34ca22"}}/> : <TimelineDot/>}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Conversation</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
          { arrayObj.includes("Interview Process") ? <TimelineDot style={{"background-color": "#34ca22"}}/> : <TimelineDot/>}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Interview Process</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
          { arrayObj.includes("Apprrove/Rejected") ? <TimelineDot style={{"background-color": "#34ca22"}}/> : <TimelineDot/>}
            {/* <TimelineDot/> */}
          </TimelineSeparator>
          <TimelineContent >Apprrove/Rejected</TimelineContent>
        </TimelineItem>
      </Timeline>
      </div>
    );
  }