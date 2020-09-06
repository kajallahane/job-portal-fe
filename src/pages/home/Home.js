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
      <Container maxWidth="sm" >
        <div className="jobs-home-container">
          <Button onClick={() => this.props.history.push("/candidatehome")} variant="contained" color="primary">
            Candidate login
        </Button>
          <Button onClick={() => this.props.history.push("/requestList")} variant="contained" color="secondary">
            Recruiter login
        </Button>
        </div>
      </Container>
    );
  }
}

export default Home;
