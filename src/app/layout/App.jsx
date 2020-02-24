import React, { Component } from "react";
import { Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import EventForm from "../../features/event/EventForm/EventForm";
import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from "../../features/home/HomePage";
import UserDetailedPage from "../../features/event/user/UserDetailed/UserDetailedPage";
import PeopleDashboard from "../../features/event/user/peopleDashboard/PeopleDashboard";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import SettingsDashboard from "../../features/event/user/settings/SettingsDashboard";
import TestComponent from "../../features/test/TestComponent";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />{" "}
                <Route path="/createEvent" component={EventForm} />
                <Route path="/test" component={TestComponent} />
              </Container>
            </>
          )}
        />
      </>
    );
  }
}

export default App;
