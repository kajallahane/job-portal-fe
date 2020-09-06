import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';

import TimelineDot from '@material-ui/lab/TimelineDot';

export default function RequestTimeline(props) {
  const { jobRequestStatus } = props;

  return (
    <div>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            {jobRequestStatus.includes("Applied") ? <TimelineDot style={{ "backgroundColor": "#34ca22" }} /> : <TimelineDot />}
            {/* <TimelineDot/> */}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent >Applied</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            {/* <TimelineDot/> */}
            {jobRequestStatus.includes("Conversation") ? <TimelineDot style={{ "backgroundColor": "#34ca22" }} /> : <TimelineDot />}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Conversation</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            {jobRequestStatus.includes("Interview Process") ? <TimelineDot style={{ "backgroundColor": "#34ca22" }} /> : <TimelineDot />}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Interview Process</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            {jobRequestStatus.includes("Apprrove/Rejected") ? <TimelineDot style={{ "backgroundColor": "#34ca22" }} /> : <TimelineDot />}
            {/* <TimelineDot/> */}
          </TimelineSeparator>
          <TimelineContent >Apprrove/Rejected</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}