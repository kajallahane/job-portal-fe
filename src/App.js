import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import JobList from './pages/candidate/job-list'
import RequestStatus from './pages/candidate/request-status'

class App extends React.Component {
    /*rendering view*/
    render = () => {
        return (
            <Router>
                <div>
                    <Route  exact={true} path="/candidatehome" render={(props) => <JobList {...props} />} />
                    <Route  exact={true} path="/requestStatus" render={(props) => <RequestStatus {...props} />} />
                    <Route exact={true} path="/" render={(props) => <Home {...props} />} />
                </div>
            </Router>
        );
    }
}

export default App;
