import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

export const EventSummary = ({ summary }: { summary: string }) => {
  return (
    <div className="rounded-2xl bg-secondaryBg px-1">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-8">Incident Summary</AccordionTrigger>
          <AccordionContent>
            <div className="rounded-2xl bg-white p-1 text-xl">
              <p className="whitespace-pre-wrap p-8">{summary}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
