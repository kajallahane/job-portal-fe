import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/home/Home";

class App extends React.Component {
    /*rendering view*/
    render = () => {
        return (
            <Router>
                <div className="">
                    <Route path="/" render={(props) => <Home {...props} />} />
                </div>
            </Router>
        );
    }
}

export default App;
