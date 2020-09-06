import React from 'react';
import PersistentDrawerLeft from '../assests/drawer'
import RequestTimeline from '../assests/timeline'
import './requestStatus.css'

export default function RequestStatus(props) {
    let jobRequestStatus = [{
        "jobRequestId": "req543275",
        "jobRequestStatus": ["Applied", "Conversation"],
        "jobDetails": {
            "jobId": "job123",
            "title": "Fullstack devloper",
            "expectedExperience": "3-5 Years",
            "description": "Just another fullstack job",
            "company": "Telstra",
            "location": "Pune",
            "companyId": "567"
        },
        "candidateDetails": {
            "name": "Abhishek",
            "emailId": "abhishek@gmail.com",
            "candidateId": "1234",
            "experience": "5 Years",
            "contact": 123456788,
            "noticePeriod": "3 Months",
            "salary": "5 LPA"
        }
    },
    {
        "jobRequestId": "req543212",
        "jobRequestStatus": ["Applied", "Conversation", "Interview Process"],
        "jobDetails": {
            "jobId": "job123",
            "title": "Feature team lead",
            "expectedExperience": "5 Years",
            "description": "Just another fullstack job",
            "company": "Telstra",
            "location": "Pune",
            "companyId": "567"
        },
        "candidateDetails": {
            "name": "Abhishek",
            "emailId": "abhishek@gmail.com",
            "candidateId": "1234",
            "experience": "5 Years",
            "contact": 123456788,
            "noticePeriod": "3 Months",
            "salary": "5 LPA"
        }
    }
    ]
    const routeData = [
        { url: "/candidatehome", item: "Job" },
        { url: "/requeststatus", item: "Request Status" }
    ]

    return (
        <div className="job-list">
            <PersistentDrawerLeft routeData={routeData} history={props.history} />
            <div id="reqStatus" style={{ "margin": "auto", "width": "65%" }}>
                {jobRequestStatus.map((obj) =>
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
