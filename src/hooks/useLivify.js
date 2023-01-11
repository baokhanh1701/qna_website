import { useEffect, useState } from 'react';
import { getEvents, getSingleEvent } from '../api/eventService';

export const useGetAllEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getEvents().then((results) => setEvents(results))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        events,
        loading,
    }
}

export const useGetOneEvent = (event_id) => {
    const [event, setEvent] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getSingleEvent(event_id).then((res) => {
            setEvent(res);
        }).finally(() => {
            setLoading(false);
        })
    })

    return {
        event,
        loading,
    }
}