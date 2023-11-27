import { IEvent } from '@/shared/types/event.types';

import { EventInfoDescription } from './EventInfoDescription';
import { EventLocation } from './EventLocation';
import { EventVideos } from './EventVideos';

interface IEventArticleInfo {
  selectedEvent: IEvent;
}

export const EventArticleInfo = ({ selectedEvent }: IEventArticleInfo) => {
  return (
    <div className="rounded-2xl bg-secondaryBg px-1">
      <EventVideos eventId={selectedEvent?.id || ''} />
      <EventInfoDescription selectedEvent={selectedEvent} />
      <EventLocation selectedEvent={selectedEvent} />
    </div>
  );
};
