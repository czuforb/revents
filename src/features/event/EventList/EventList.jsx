import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <>
        {events.map(event => (
          <EventListItem
            key={event.id}
            deleteEvent={deleteEvent}
            event={event}
          />
        ))}
      </>
    );
  }
}

export default EventList;
