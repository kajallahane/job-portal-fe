import React, { useEffect, useState } from 'react';
import PersistentDrawerLeft from '../assests/drawer'
import RequestTimeline from '../assests/timeline'
import { getCandidateJobRequestList } from "../../server/Server";
import './requestStatus.css'

export default function RequestStatus(props) {

    const candidateId = '123'
    const [jobsRequests, setJobRequests] = useState([]);
    async function fetchJobRequests(candidateId) {
        const result = await getCandidateJobRequestList(candidateId)
        setJobRequests(result.data);
    }

    useEffect(() => {
        fetchJobRequests(candidateId);
    }, [candidateId]);
    const routeData = [
        { url: "/candidatehome", item: "Job" },
        { url: "/requeststatus", item: "Request Status" }
    ]


    return (
        <div className="job-list">
            <PersistentDrawerLeft routeData={routeData} history={props.history} />
            <div id="reqStatus" style={{ "margin": "auto", "width": "65%" }}>
                {jobsRequests.map((obj) =>
                    <div className="job-request-container" key={obj.jobRequestId}>
                        <div className="job-request-summary">
                            <h2>{obj.jobDetails.company}</h2>
                            <h4>{obj.jobDetails.title}</h4>
                            <h6>{obj.jobDetails.location}</h6>
                            <h6>{obj.jobDetails.expectedExperience}</h6>
                        </div>
                        <div className="timeline-container">
                            <RequestTimeline {...obj} />
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );

}
