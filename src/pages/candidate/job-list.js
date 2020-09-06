import React from 'react';
import OutlinedCard from '../assests/cards'
import PersistentDrawerLeft from '../assests/drawer'

export default function JobList(){
    
        let postedJob = [
            {jobId: 1, title:"Senior Software Enginner", location:"Pune", organization: "TCS", experience:3},
            {jobId: 2, title:"Feature Team Lead", location:"Australia", organization: "Telstra",experience:5}
        ]
        const routeData = [
            {url:"", item:"Job"},
            {url:"", item:"Request Status"}
        ]
        
        return (    
            <div className="job-list">
                <PersistentDrawerLeft routeData={routeData} />
                    <div id="cardsDiv" style={{"margin": "auto","width": "65%"}}>
                    {   
                        postedJob.map( obj=> {
                            return OutlinedCard(obj)
                        })
                    }
                    </div>
            </div>
        );
    
}
