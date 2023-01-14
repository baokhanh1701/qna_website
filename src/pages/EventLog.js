import { Container, Grid, Text, Spacer } from "@nextui-org/react";
import { useGetAllEvents } from "../hooks/useLivify";
import EventItem  from "../components/EventItem";
const EventLog = () => {

  const { events } = useGetAllEvents();

  return (
    <Container>
      <Spacer />
      <Text h1> Event Log </Text>
      <Text p>
        You can see the upcoming events here.
      </Text>

      <Grid.Container
        gap={2}
        css={{
          padding: "2rem 0",
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