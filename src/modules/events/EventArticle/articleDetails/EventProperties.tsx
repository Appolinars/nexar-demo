import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { IEventVideoLabels } from '@/shared/types/event.types';

import { PropertiesValuesEnum } from '../EventArticle.types';
import { EventPropertiesItem } from './EventPropertiesItem';

interface IEventProperties {
  videoLabels: string;
}

export const EventProperties = ({ videoLabels }: IEventProperties) => {
  // Parse the JSON string into an object
  const labels: IEventVideoLabels = JSON.parse(videoLabels);

  const propertiesArray = Object.entries(labels);
  // Map each key-value pair in the labels object to a list item
  const listItems = propertiesArray.map(([key, value]: [string, PropertiesValuesEnum]) => (
    <EventPropertiesItem key={key} label={key} value={value} />
  ));

  return (
    <div className="rounded-2xl bg-secondaryBg px-1">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-8">Event Properties</AccordionTrigger>
          <AccordionContent>
            <ul className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-9 text-xl">{listItems}</ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
