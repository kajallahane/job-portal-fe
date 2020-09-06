import React from 'react';
import PersistentDrawerLeft from '../assests/drawer'
import RequestTimeline from '../assests/timeline'

export default function RequestStatus(props) {

    let jobRequestStatus = [
        { "status": ["Applied", "Conversation"] },
        { "status": ["Applied", "Conversation", "Interview Process"] }
    ]
    const routeData = [
        { url: "/candidatehome", item: "Job" },
        { url: "/requeststatus", item: "Request Status" }
    ]

    return (
        <div className="job-list">
            <PersistentDrawerLeft routeData={routeData} history={props.history} />
            <div id="reqStatus" style={{ "margin": "auto", "width": "65%" }}>
                {jobRequestStatus.map((obj) => {
                    return RequestTimeline(obj)
                })
                }
            </div>
        </div>
    );

}
