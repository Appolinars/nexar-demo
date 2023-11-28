import eventsJson from 'data/events-data.json';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowLeftIcon from 'svg/chevron-left.svg?react';

import { IEvent } from '@/shared/types/event.types';

import { EventArticleDetails } from './articleDetails/EventArticleDetails';
import { EventArticleInfo } from './articleInfo/EventArticleInfo';

export const EventArticle = () => {
  const { eventId } = useParams();
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

  useEffect(() => {
    if (eventId) {
      const event = eventsJson.find((event) => event.id === eventId) as IEvent;
      setSelectedEvent(event || null);
    }
  }, [eventId]);

  return (
    <div>
      <header className="p-6">
        <Link to="/" className="group inline-flex items-center text-xl font-semibold">
          <ArrowLeftIcon className="mr-3 transition-transform will-change-transform group-hover:-translate-x-1" />
          Back to other events
        </Link>
      </header>
      {selectedEvent && (
        <div className="grid auto-rows-min grid-cols-[minmax(0,_380px)_auto] items-start gap-4">
          <EventArticleInfo selectedEvent={selectedEvent} />
          <EventArticleDetails selectedEvent={selectedEvent} />
        </div>
      )}
    </div>
  );
};
