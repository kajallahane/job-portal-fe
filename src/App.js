import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import JobList from './pages/candidate/job-list'
import PersistentDrawerLeft from './pages/assests/drawer'

class App extends React.Component {
    /*rendering view*/
    render = () => {
        return (
            <Router>
                <div className="">
                    <Route  exact={true} path="/candidatehome" render={(props) => <JobList {...props} />} />
                    <Route  exact={true} path="/PersistentDrawerLeft" render={(props) => <PersistentDrawerLeft {...props} />} />
                    <Route exact={true} path="/" render={(props) => <Home {...props} />} />
                </div>
            </Router>
        );
    }
}

export default App;
