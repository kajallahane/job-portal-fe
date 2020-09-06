import React from 'react';
import PersistentDrawerLeft from '../assests/drawer'
import RequestTimeline from '../assests/timeline'

export default function RequestStatus(){
    
        let jobRequestStatus = [
            {"jobId1": ["Applied", "Conversation"]},
            {"jobId2": ["Applied", "Conversation", "Interview Process"]}
        ]
        const routeData = [
            {url:"", item:"Job"},
            {url:"", item:"Request Status"}
        ]
        
        return (    
            <div className="job-list">
                <PersistentDrawerLeft routeData={routeData} />
                    <div id="reqStatus" style={{"margin": "auto","width": "65%"}}>
                   { jobRequestStatus.map( (obj)=>{
                       return  RequestTimeline(obj)
                    })
                    }
                    </div>
            </div>
        );
    
}
