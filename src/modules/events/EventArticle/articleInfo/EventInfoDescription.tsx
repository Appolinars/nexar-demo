import InfoIcon from 'svg/info-circle.svg?react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip';
import { IEvent } from '@/shared/types/event.types';
interface IEventInfoDescription {
  selectedEvent: IEvent;
}

export const EventInfoDescription = ({ selectedEvent }: IEventInfoDescription) => {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-6">Information</AccordionTrigger>
        <AccordionContent>
          <div className="rounded-2xl bg-white px-9 text-xl">
            <div className="border-b py-8">
              <p className="text-secondary">Date and Time</p>
              <p className="font-semibold">{selectedEvent?.timestamp}</p>
            </div>
            <div className="border-b py-8">
              <p className="text-secondary">Max G Norm</p>
              <p className="font-semibold">{selectedEvent?.max_g_norm}</p>
            </div>
            <div className="flex justify-between py-8">
              <div className="inline-flex items-center">
                Type
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="ml-2 text-secondary" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>Some information about type</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <span className="rounded-3xl bg-error/10 px-3 py-2 font-semibold text-error">
                {selectedEvent?.type.replace(/_/g, ' ')}
              </span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
