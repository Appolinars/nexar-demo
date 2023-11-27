import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

const substringRegex =
  /(?<=Description of the video from road-facing camera:\s*).*?(?=\s*Description of the video from cabin-facing camera:)/gs;

export const RoadVideoDescription = ({ description }: { description: string }) => {
  const result = description.match(substringRegex);
  return (
    <div className="rounded-2xl bg-secondaryBg px-1">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-8">
            Video Text Description (road-facing camera)
          </AccordionTrigger>
          <AccordionContent>
            <div className="rounded-2xl bg-white p-1 text-xl">
              <p className="whitespace-pre-wrap p-8">{result}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
