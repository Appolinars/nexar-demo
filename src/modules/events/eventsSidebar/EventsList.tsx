import eventsJson from 'data/events-data.json';
import { Link, useParams } from 'react-router-dom';
import SquareIcon from 'svg/square.svg?react';

import { cn } from '@/shared/utils';

export const EventsList = () => {
  const { eventId: eventIdParam } = useParams();

  return (
    <ul className="custom-scrollbar mb-5 max-h-[70vh] overflow-y-auto">
      {eventsJson.map((event) => (
        <li key={event.id}>
          <Link
            to={`/${event.id}`}
            className={cn(
              'flex break-all rounded-2xl p-6 font-semibold transition-colors hover:bg-accentLight',
              {
                'bg-accentLight': event.id === eventIdParam,
              }
            )}
          >
            <SquareIcon className="mr-3 shrink-0" />
            <span className="flex flex-col">
              <span>[{event?.id?.slice(-5)}]</span>
              <span>{event?.timestamp}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
