import React from 'react';
import './home.css';
import { Container, Button } from '@material-ui/core';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    };
  }

  render = () => {
    return (
      <div>
        <div className="jobs-home-container">
          <div className="jobs-home-button-container">
            <Button onClick={() => this.props.history.push("/candidatehome")} variant="contained" color="primary">
              Candidate login
          </Button>
          </div>
          <div className="jobs-home-button-container">
            <Button onClick={() => this.props.history.push("/requestList")} variant="contained" color="secondary">
              Recruiter login
        </Button>
          </div>
        </div >
      </div >
    );
  }
}

export default Home;
