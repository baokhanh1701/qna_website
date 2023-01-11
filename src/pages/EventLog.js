import { Container, Grid, Text, Pagination } from "@nextui-org/react";
import { useGetAllEvents } from "../hooks/useLivify";
import EventItem  from "../components/EventItem";
const EventLog = () => {

  const { events, loading } = useGetAllEvents();

  return (
    <Container>
      <Text h1> Event Log </Text>
      <Text p>
        This is where you save your past events and their discussions.
      </Text>

      <Grid.Container
        gap={2}
        css={{
          padding: "4rem 0",
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