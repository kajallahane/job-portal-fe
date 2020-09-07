import React,{useEffect, useState} from 'react';
import PersistentDrawerLeft from '../assests/drawer'
import RequestTimeline from '../assests/timeline'
import { getRequestList } from "../../server/Server";

export default function RequestStatusRec(props){
    // let requestData = [
    //     { "jobRequestStatus": ["Applied", "Conversation"] },
    // ]


        const [requestData, setRequestData] = useState([]);
        async function fetchRequest() {
            const result = await getRequestList()
            setRequestData(result.data);
        }
    
        useEffect(() => {
            fetchRequest();
        }, []);

    const routeData = [
        { url: "/requestList", item: "Request List" },
        { url: "/analytics", item: "Analytics" }       
    ]
    // console.log("id-->",props.match)
    
    return (    
        <div className="job-list">
            <PersistentDrawerLeft routeData={routeData} history={props.history}/>
            {/* <div style={{ "margin": "auto", "width": "65%" }}>
                {requestData.map((obj) => 
                    <RequestTimeline {...obj}/>
                )
                }
            </div> */}
            <div id="reqStatus" style={{ "margin": "auto", "width": "65%" }}>
                {requestData.map((obj) =>
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