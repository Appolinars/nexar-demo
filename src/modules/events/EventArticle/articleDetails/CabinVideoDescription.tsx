import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

const fallbackText = 'No data available';
const substringForSearch = 'Description of the video from cabin-facing camera:';

export const CabinVideoDescription = ({ description }: { description: string }) => {
  const cabinDescription = description.slice(
    description.indexOf(substringForSearch) + substringForSearch.length
  );
  return (
    <div className="rounded-2xl bg-secondaryBg px-1">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-8">
            Video Text Description (cabin-facing camera)
          </AccordionTrigger>
          <AccordionContent>
            <div className="rounded-2xl bg-white p-1 text-xl">
              <p className="whitespace-pre-wrap p-8">{cabinDescription?.trim() || fallbackText}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
