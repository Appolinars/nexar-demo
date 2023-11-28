import { IEvent } from '@/shared/types/event.types';

import { CabinVideoDescription } from './CabinVideoDescription';
import { EventCoachingFeedback } from './EventCoachingFeedback';
import { EventProperties } from './EventProperties';
import { EventSummary } from './EventSummary';
import { RoadVideoDescription } from './RoadVideoDescription';

interface IEventArticleDetails {
  selectedEvent: IEvent;
}

export const EventArticleDetails = ({ selectedEvent }: IEventArticleDetails) => {
  return (
    <div className="grid auto-rows-max grid-cols-1 items-start gap-4">
      <EventProperties selectedEvent={selectedEvent} />
      <EventCoachingFeedback feedback={selectedEvent?.driver_coaching_feedback || ''} />
      <RoadVideoDescription description={selectedEvent?.videos_txt_desc || ''} />
      <CabinVideoDescription description={selectedEvent?.videos_txt_desc || ''} />
      <EventSummary summary={selectedEvent?.incident_summary || ''} />
    </div>
  );
};
