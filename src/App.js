import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import JobList from './pages/candidate/job-list'
import RequestStatus from './pages/candidate/request-status'
import RequestList from './pages/recruiter/request-list'
import RequestStatusDeatils from './pages/recruiter/request-status-details'

const NoMatchPage = () => {
    return (
        <h3>404 - Not found</h3>
    );
};
class App extends React.Component {
    /*rendering view*/
    render = () => {
        return (
            <Router>
                <div>
                    <Route exact={true} path="/candidatehome" render={(props) => <JobList {...props} />} />
                    <Route exact={true} path="/requeststatus" render={(props) => <RequestStatus {...props} />} />
                    <Route exact={true} path="/requestList" render={(props) => <RequestList {...props} />} />
                    <Route exact={true} path="/requestStatusDeatils" render={(props) => <RequestStatusDeatils {...props} />} />
                    <Route exact={true} path="/" render={(props) => <Home {...props} />} />
                    <Route component={NoMatchPage} />
                </div>
            </Router>
        );
    }
}

export default App;
