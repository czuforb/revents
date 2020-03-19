import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";
import { connect } from "react-redux";

import {
  createEvent,
  updateEvent,
  deleteEvent
} from "../../event/eventActions";

const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: ""
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent);
    this.setState(({ events }) => ({
      events: [...events, newEvent]
    }));
  };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  // handleIsOpenToggle = () => {
  //   this.setState(({ isOpen }) => ({
  //     isOpen: !isOpen
  //   }));
  // };

  handleSelectEvent = event => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    });
  };

  handleUpdatedEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState(({ events }) => ({
      isOpen: false,
      selectedEvent: null
    }));
  };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            positive
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              updatedEvent={this.handleUpdatedEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
