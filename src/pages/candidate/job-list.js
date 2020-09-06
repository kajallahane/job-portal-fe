import React from 'react';
import OutlinedCard from '../assests/cards'
import PersistentDrawerLeft from '../assests/drawer'
import './joblist.css'

export default function JobList(props) {
    let postedJob = [
        { jobId: 1, title: "Senior Software Enginner", location: "Pune", organization: "TCS", experience: 3 },
        { jobId: 2, title: "Feature Team Lead", location: "Australia", organization: "Telstra", experience: 5 }
    ]
    const routeData = [
        { url: "/candidatehome", item: "Job" },
        { url: "/requeststatus", item: "Request Status" }
    ]

    return (
        <React.Fragment>
            <PersistentDrawerLeft routeData={routeData} history={props.history} />
            <div className="job-list-container">
                <div className="job-list-title">
                    <h2>Jobs</h2>
                </div>
                <div className="job-list">
                    <div id="cardsDiv">
                        {
                            postedJob.map(obj => {
                                return OutlinedCard(obj)
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}
