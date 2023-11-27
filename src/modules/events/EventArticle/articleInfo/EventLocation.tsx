import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { IEvent } from '@/shared/types/event.types';

interface IEventLocation {
  selectedEvent: IEvent;
}

export const EventLocation = ({ selectedEvent }: IEventLocation) => {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-6">Route on the map</AccordionTrigger>
        <AccordionContent>
          <div className="rounded-2xl bg-white p-1 text-xl">
            <div className="p-8">
              <p className="text-secondary">Latitude, Longitude</p>
              <p className="font-semibold">
                {selectedEvent?.latitude}, {selectedEvent?.longitude}
              </p>
            </div>
            <Button className="w-full" asChild>
              <a
                href={`https://maps.google.com/?q=${selectedEvent?.latitude},${selectedEvent?.longitude}`}
                target="_blank"
                rel="noreferrer"
              >
                View on Google Maps
              </a>
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
