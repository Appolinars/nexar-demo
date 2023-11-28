import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { IEvent, IEventVideoLabels } from '@/shared/types/event.types';

import { PropertiesValuesEnum } from '../EventArticle.types';
import { EventPropertiesItem } from './EventPropertiesItem';

interface IEventProperties {
  selectedEvent: IEvent;
}

const renderEventProperties = (
  properties: { [key: string]: string | number } | IEventVideoLabels,
  title: string
) => {
  const propertiesList = Object.entries(properties).map(
    ([key, value]: [string, PropertiesValuesEnum | string | number]) => (
      <EventPropertiesItem key={key} label={key} value={value} />
    )
  );

  return (
    propertiesList.length > 0 && (
      <div className="mb-4 border-b pb-4 last:border-none last:p-0">
        {title && <p className="mb-2 font-semibold">{title}</p>}
        <ul className="grid grid-cols-2 gap-4">{propertiesList}</ul>
      </div>
    )
  );
};

export const EventProperties = ({ selectedEvent }: IEventProperties) => {
  const videoLabels = selectedEvent?.video_labels;
  // Parse the JSON string into an object
  const labels: IEventVideoLabels =
    typeof videoLabels === 'object' ? videoLabels : JSON.parse(videoLabels);

  return (
    <div className="rounded-2xl bg-secondaryBg p-1">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-8">Event Properties</AccordionTrigger>
          <AccordionContent className="rounded-2xl bg-white p-9 text-xl">
            {renderEventProperties(selectedEvent['Driver Attention'], 'Driver Attention')}
            {renderEventProperties(selectedEvent['Driver Environment'], 'Driver Environment')}
            {renderEventProperties(selectedEvent['Driving Events'], 'Driving Events')}
            {renderEventProperties(labels, '')}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
