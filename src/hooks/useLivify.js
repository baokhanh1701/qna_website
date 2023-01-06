import { useEffect, useState } from 'react';
import { useGetEvents, useGetSingleEvent } from '../api/eventService';

export const useGetWholeEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        useGetEvents()
            .then((results) => setEvents(results))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {
        events,
        loading,
    }
}