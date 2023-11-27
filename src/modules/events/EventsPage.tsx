import { Outlet, useParams } from 'react-router-dom';

import { EventsSidebar } from './eventsSidebar/EventsSidebar';

export const EventsPage = () => {
  const { eventId } = useParams();

  return (
    <div className="container grid grid-cols-[minmax(0,_225px)_auto] gap-4 pb-8">
      <EventsSidebar />
      {eventId ? (
        <Outlet />
      ) : (
        <div className="flex max-h-[70vh] items-center justify-center text-xl">
          Please select an event to view details
        </div>
      )}
    </div>
  );
};
