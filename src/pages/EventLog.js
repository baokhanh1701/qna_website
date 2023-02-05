import { Container, Grid, Text, Spacer } from "@nextui-org/react";
import { useGetAllEvents } from "../hooks/useLivify";
import EventItem from "../components/EventItem";
import { useContext } from "react";
import { userContext } from "../App";

const EventLog = () => {
  const { events } = useGetAllEvents();
  const { isDark } = useContext(userContext);

  return (
    <Container xl style={!isDark ? {
      backgroundImage: `url(${"https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg"})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: "fixed"
    } : {
      backgroundImage: `url(${"https://images.unsplash.com/photo-1516575355332-d2934104e253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: "fixed"
    }}>
      <Text h1> Events Database </Text>
      <Text p>
        You can see the upcoming events here.
      </Text>

      <Grid.Container
        gap={2}
        css={{
          padding: "2rem 2rem",
        }}
      >
        {events.map((event) => (
          <EventItem eventData={event} />
        ))}
      </Grid.Container>
    </Container>
  );
};

export default EventLog;