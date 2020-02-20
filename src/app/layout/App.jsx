import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </>
    );
  }
}

export default App;
