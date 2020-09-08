import React, { useState } from 'react';
import PersistentDrawerLeft from '../assests/drawer'
import RequestTimeline from '../assests/timeline'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { updateJobRequestStatus } from '../../server/Server'
import './requeststatus.css'

export default function RequestStatusDeatils(props) {
    const routeData = [
        { url: "/requestList", item: "Request List" },
        { url: "/analytics", item: "Analytics" }
    ]
    let jobRequest = sessionStorage.getItem("jobDetails")
    jobRequest = JSON.parse(jobRequest)

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    const [status, setStatus] = useState('');

    async function updateJobRequest() {
        const updateData = { jobRequestId: jobRequest.jobRequestId, newStatus: status, recruiterId: "567", candidateId: "123", }
        const response = await updateJobRequestStatus(updateData)
        alert(response)
        props.history.push("/requestStatusDeatils/?id=567")
    }

    return (
        <div className="job-list">
            <PersistentDrawerLeft routeData={routeData} history={props.history} />
            <div id="reqStatus" style={{ "margin": "auto", "width": "65%" }}>

                <div className="job-request-container" key={jobRequest.jobRequestId}>

                    <div className="job-request-summary">
                        <h2>{jobRequest.jobDetails.company}</h2>
                        <h4>{jobRequest.jobDetails.title}</h4>
                        <h6>{jobRequest.jobDetails.location}</h6>
                        <h6>{jobRequest.jobDetails.expectedExperience}</h6>
                        <div className="job-request-status-change">
                            <FormControl className="job-request-status-dropdown">
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={status} onChange={handleChange} >
                                    <MenuItem value={"Conversation"}>Conversation</MenuItem>
                                    <MenuItem value={"Interview Process"}>Interview Process</MenuItem>
                                    <MenuItem value={"Apprrove"}>Apprrove</MenuItem>
                                    <MenuItem value={"Rejected"}>Rejected</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="job-request-status-update-button">
                                <Button
                                    variant="contained"
                                    color="primary" onClick={() => updateJobRequest()} size="medium">Update</Button>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-container">
                        <RequestTimeline {...jobRequest} />
                    </div>
                </div>
            </div>
        </div>
    );

}