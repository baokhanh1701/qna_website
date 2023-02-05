import React, { useState, useContext } from "react";
import { Container, Text, Image, Button, Modal, Spacer, Col, Grid, Table } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { useGetOneEvent } from "../hooks/useLivify";
import { gapi } from "gapi-script";
import EventCalendar from "../components/EventCalendar";
import { userContext } from "../App";

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
    const {isDark, setIsDark} = useContext(userContext);

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


    // {
    //     "name": "Digitized neutral capacity",
    //     "date": "2081-04-24T21:21:32.459Z",
    //     "location": "Mortimer River",
    //     "description": "Sed odit libero pariatur iure ducimus necessitatibus nam laborum eaque. Alias facere inventore. Sapiente cupiditate eos explicabo aliquid aspernatur.\nMagni voluptate consequatur suscipit fuga est nam. Delectus soluta enim fugiat ex ipsa soluta. Eos modi unde provident deleniti quisquam suscipit eligendi. Harum ipsa facilis labore est voluptatibus magni. Magnam dolore ratione quae inventore rerum ex corrupti.\nTenetur esse praesentium. Possimus soluta id ipsa nesciunt ea accusamus. Maxime minus numquam vero magni corporis.",
    //     "isLive": true,
    //     "numberOfAttendee": 13178,
    //     "host": "Wisoky LLC",
    //     "img": "https://loremflickr.com/640/480/cats",
    //     "speaker": "Jerome Hegmann",
    //     "id": "1"
    //    },

    const dateConvert = event?.date;
    // const dateStr = dateConvert.slice(0, 10);
    // const timeStr = dateConvert.slice(11, 16);
    return (
        <Container xl
            align="center"
            style={!isDark ? {
                backgroundImage: `url(${"https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg"})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            } : {backgroundColor: "black"}}>                
            <Container align="center">
                <Text h1 css={{
                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                    weight="bold"> {event?.name}</Text>
                <Text
                            weight="bold"
                            transform="uppercase"
                            color="#ffffffAA"
                            css={{ color: event.isLive ? "$green500" : "$red600" }}
                        h4>
                            {event.isLive ? "⦿ Online" : "⦿ Offline"}
                        </Text>
                <Image
                    showSkeleton
                    maxDelay={1500}
                    src={event?.img}
                    objectFit="cover"
                    width={300}
                    height={300}
                />
                <Grid.Container gap={2} align="center">
                    <Grid>
                        <Text h3> Description</Text>
                        <Text p> {event?.description} </Text>
                    </Grid>
                    {/* <Grid>
                        <Text h4>Date:
                            <Text p></Text>
                            {event?.date.slice(0, 10)}
                        </Text>
                    </Grid>
                    <Grid>
                        <Text h4>Time: {event?.date.slice(11, 16)} </Text>
                    </Grid> */}
                </Grid.Container>
                <Text h3> Event Information</Text>
                <Text h5> General</Text>
                <Table
                    bordered
                    hoverable
                    shadow={true}
                    aria-label="Example static bordered collection table"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                >
                    <Table.Header>
                        <Table.Column>DATE</Table.Column>
                        <Table.Column>TIME</Table.Column>
                        <Table.Column>NUMBER OF PARTICIPANTS</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell>                            
                                {dateConvert}
                            </Table.Cell>
                            <Table.Cell>{dateConvert}</Table.Cell>
                            <Table.Cell>{event?.numberOfAttendee}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>



                <Spacer />
                <Text h5>Invited and Organized by: </Text>
                <Table
                    bordered
                    hoverable
                    shadow={true}
                    aria-label="Example static bordered collection table"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                >
                    <Table.Header>
                        <Table.Column>NAME</Table.Column>
                        <Table.Column>ROLE</Table.Column>
                        <Table.Column>ORGANIZATION</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row key="1">
                            <Table.Cell>{event?.speaker}</Table.Cell>
                            <Table.Cell>Speaker</Table.Cell>
                            <Table.Cell>Company</Table.Cell>
                        </Table.Row>
                        <Table.Row key="2">
                            <Table.Cell>Zoey Lang</Table.Cell>
                            <Table.Cell>Host</Table.Cell>
                            <Table.Cell>{event?.host}</Table.Cell>
                        </Table.Row>
                        <Table.Row key="3">
                            <Table.Cell>Jane Fisher</Table.Cell>
                            <Table.Cell>Organizer</Table.Cell>
                            <Table.Cell>{event?.host}</Table.Cell>
                        </Table.Row>
                        <Table.Row key="4">
                            <Table.Cell>William Howard</Table.Cell>
                            <Table.Cell>Technician</Table.Cell>
                            <Table.Cell>{event?.host}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Spacer />
                <Button onPress={() => setIsVisible(true)}>Trailer</Button>
                <Spacer />
                <Button
                // onPress={addEvent(calendarID, eventExample)}
                >
                    Add to your Calendar
                </Button>
                <Modal
                    closeButton
                    blur
                    width="650px"
                    aria-labelledby="modal-title"
                    open={isVisible}
                    onClose={() => setIsVisible(false)}
                >
                    <Modal.Header>
                        <Text h3>PROMOTE VIDEO: {event?.name}</Text>
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
                <Spacer />
                {/* <iframe src="https://calendar.google.com/calendar/embed?src=knguyenkieubao%40gmail.com&ctz=Asia%2FHo_Chi_Minh" width="auto" height="400"></iframe> */}
            </Container>
        </Container>
    )
}
export default EventInfo;