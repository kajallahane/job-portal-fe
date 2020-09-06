import React from 'react';
import PersistentDrawerLeft from '../assests/drawer'
import RequestTimeline from '../assests/timeline'

export default function RequestStatusRec(props){
    let jobRequestStatus = [
        { "status": ["Applied", "Conversation"] },
    ]
    const routeData = [
        { url: "/requestList", item: "Request List" },
        { url: "/analytics", item: "Analytics" }       
    ]
    
    return (    
        <div className="job-list">
            <PersistentDrawerLeft routeData={routeData} history={props.history}/>
            <div style={{ "margin": "auto", "width": "65%" }}>
                {jobRequestStatus.map((obj) => {
                    return RequestTimeline(obj)
                })
                }
            </div>
        </div>
    );

}