import React, { useState, useEffect } from "react";
import { Container, Text, Image, Button, Modal } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { useGetOneEvent } from "../hooks/useLivify";
import { gapi } from "gapi-script";
import EventCalendar from "../components/EventCalendar";

const EventInfo = () => {
    // {
    //     "name": "Triple-buffered upward-trending synergy",
    //     "date": "2044-10-13T16:04:02.131Z",
    //     "location": "Kassulke Forges",
    //     "description": "Voluptatum quis est alias itaque soluta placeat provident labore eos. In perferendis voluptatem incidunt perferendis sit fuga commodi voluptas. Nemo similique corporis exercitationem ipsam ullam enim amet reprehenderit. Temporibus quod dolores.\nQuae eaque officia laudantium ipsum veritatis non quisquam. Recusandae alias ut sapiente illum dolor nam. Ea corrupti animi laudantium minima aut incidunt. Omnis inventore blanditiis minima nostrum illum.\nQuaerat et nihil id maiores sunt perspiciatis labore fuga. Perferendis dignissimos ipsum architecto maxime iure. Facere ad explicabo dicta.",
    //     "isLive": false,
    //     "numberOfAttendee": 45011,
    //     "host": "Dooley, Schoen and Willms",
    //     "img": "https://loremflickr.com/640/480/fashion",
    //     "id": "1"
    //    }
    const { id } = useParams();
    const [isVisible, setIsVisible] = useState(false);
    const { event, loading } = useGetOneEvent(id);

    const [events, setEvents] = useState([]);

    console.log(event);
    const videos = ["https://www.youtube.com/embed/9bZkp7q19f0", "https://www.youtube.com/embed/dQw4w9WgXcQ"];
    let randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];

    //Google Calendar Implementation
    // const calendarID = process.env.REACT_APP_CALENDAR_ID;
    // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    // const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

    // const getEvents = (calendarID, apiKey) => {
    //     function initiate() {
    //         gapi.client
    //             .init({
    //                 apiKey: apiKey,
    //             })
    //             .then(function () {
    //                 return gapi.client.request({
    //                     path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
    //                 });
    //             })
    //             .then(
    //                 (response) => {
    //                     let events = response.result.items;
    //                     setEvents(events);
    //                 },
    //                 function (err) {
    //                     return [false, err];
    //                 }
    //             );
    //     }
    //     gapi.load("client", initiate);
    // };

    // useEffect(() => {
    //     const events = getEvents(calendarID, apiKey);
    //     console.log(events);
    //     setEvents(events);
    // }, []);

    // let eventExample = {
    //     summary: "Hello World",
    //     location: "",
    //     start: {
    //         dateTime: "2023-01-18T09:00:00-07:00",
    //         timeZone: "America/Los_Angeles",
    //     },
    //     end: {
    //         dateTime: "2023-01-18T17:00:00-07:00",
    //         timeZone: "America/Los_Angeles",
    //     },
    //     recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    //     attendees: [],
    //     reminders: {
    //         useDefault: false,
    //         overrides: [
    //             { method: "email", minutes: 24 * 60 },
    //             { method: "popup", minutes: 10 },
    //         ],
    //     },
    // };

    // const addEvent = (calendarID, event) => {
    //     function initiate() {
    //         gapi.client
    //             .request({
    //                 path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
    //                 method: "POST",
    //                 body: event,
    //                 headers: {
    //                     "Content-type": "application/json",
    //                     Authorization: `Bearer ${accessToken}`,
    //                 },
    //             })
    //             .then(
    //                 (response) => {
    //                     return [true, response];
    //                 },
    //                 function (err) {
    //                     console.log(err);
    //                     return [false, err];
    //                 }
    //             );
    //     }
    //     gapi.load("client", initiate);
    // };

    return (
        <Container md>
            <Image
                src={event?.img}
                objectFit="cover"
                width={300}
            />
            <Text h2> E: {event?.name}</Text>
            <Text h4> Description: {event?.description}</Text>
            <Button onPress={() => setIsVisible(true)}>Trailer</Button>
            <Modal
                closeButton
                blur
                width="650px"
                aria-labelledby="modal-title"
                open={isVisible}
                onClose={() => setIsVisible(false)}
            >
                <Modal.Header>
                    <Text>PROMOTE VIDEO: {event?.name}</Text>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        width="560"
                        height="315"
                        src={randomVideoUrl}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <iframe src="https://calendar.google.com/calendar/embed?src=knguyenkieubao%40gmail.com&ctz=Asia%2FHo_Chi_Minh" width="800" height="600"></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="error" onPress={() => setIsVisible(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            <ul>
                {events?.map((event) => (
                    <li key={event.id} className="flex justify-center">
                        <EventCalendar description={event.summary} />
                    </li>
                ))}
            </ul>
            <Button 
            // onPress={addEvent(calendarID, eventExample)}
            >
                Add to your Calendar
            </Button>
        </Container>)
}
export default EventInfo;