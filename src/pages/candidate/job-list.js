import React, { useState, useEffect } from 'react';
import OutlinedCard from '../assests/cards'
import PersistentDrawerLeft from '../assests/drawer'
import { getJobList } from "../../server/Server";
import './joblist.css'

export default function JobList(props) {
    const [jobs, setJobs] = useState([]);
    async function fetchJobs() {
        const result = await getJobList()
        setJobs(result.data);
    }

    useEffect(() => {
        fetchJobs();
    }, []);


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
                            jobs.length && jobs.map(obj =>
                                <OutlinedCard {...obj} />
                            )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}
