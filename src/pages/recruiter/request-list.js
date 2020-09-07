import React, {useEffect, useState} from 'react';
import RequestCard from '../assests/cards-rec'
import PersistentDrawerLeft from '../assests/drawer'
import { getRequestList } from "../../server/Server";

export default function RequestList(props){
    
        // let requestData = [
        //     {jobId: 1, title:"Senior Software Enginner", location:"Pune", organization: "TCS", experience:3, reqId:"1", candidateName:"abhishek",mobileNo:"123456"},
        //     {jobId: 2, title:"Feature Team Lead", location:"Australia", organization: "Telstra",experience:5, reqId:"2", candidateName:"abhishekajal",mobileNo:"123456"}
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
        
        return (    
            <div className="job-list">
                <PersistentDrawerLeft routeData={routeData} history={props.history}/>
                    <div id="cardsDiv" style={{"margin": "auto","width": "65%"}}>
                    {   
                        requestData.map( obj=> 
                           
                            <RequestCard jobrequest={obj} history={props.history}/>
                        )
                    }
                    </div>
            </div>
        );
    
}
