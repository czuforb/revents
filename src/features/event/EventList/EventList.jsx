import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    return (
      <>
        {events.map(event => (
          <EventListItem
            key={event.id}
            deleteEvent={deleteEvent}
            event={event}
            selectEvent={selectEvent}
          />
        ))}
      </>
    );
  }
}

export default EventList;
