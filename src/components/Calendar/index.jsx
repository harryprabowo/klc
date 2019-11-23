import React, { Component } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// TODO: Fetch ID from backend. One account one ID. Also show global calendar to choose classes from.

// const CALENDAR_ID = 'tb8ckdrm61bdsj6jfm7khob4u5@group.calendar.google.com'
// const API_KEY = 'AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp'
// let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

// TODO: Implement select class modal

export default class Calendar extends Component {
    render() {
        const { selectClass } = this.props
        return (
          <>
            {/* TODO: Selected class from modal triggers selectClass */}
            <BigCalendar
              localizer={localizer}
              events={[]}
              startAccessor="start"
              endAccessor="end"
              style={this.props.style}
            />
          </>
        );
    }
}