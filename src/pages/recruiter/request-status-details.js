import React,{useEffect, useState} from 'react';
import PersistentDrawerLeft from '../assests/drawer'
import RequestTimeline from '../assests/timeline'


export default function RequestStatusDeatils(props){
    const routeData = [
        { url: "/requestList", item: "Request List" },
        { url: "/analytics", item: "Analytics" }       
    ]
    let jobRequest = sessionStorage.getItem("jobDetails")
    jobRequest = JSON.parse(jobRequest)
    return (    
        <div className="job-list">
            <PersistentDrawerLeft routeData={routeData} history={props.history}/>
            <div id="reqStatus" style={{ "margin": "auto", "width": "65%" }}>
               
                    <div className="job-request-container" key={jobRequest.jobRequestId}>
                        <div className="job-request-summary">
                            <h2>{jobRequest.jobDetails.company}</h2>
                            <h4>{jobRequest.jobDetails.title}</h4>
                            <h6>{jobRequest.jobDetails.location}</h6>
                            <h6>{jobRequest.jobDetails.expectedExperience}</h6>
                        </div>
                        <div className="timeline-container">
                            <RequestTimeline {...jobRequest} />
                        </div>
                    </div>
                )
            </div>
        </div>
    );

}