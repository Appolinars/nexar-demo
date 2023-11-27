import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';

const fallbackText = 'No data available';

const substringRegex =
  /Description of the video from road-facing camera:\s*([\s\S]*?)(?=Description of the video from cabin-facing camera:|$)/;

export const RoadVideoDescription = ({ description }: { description: string }) => {
  const roadDescription = description?.match(substringRegex)?.[1];

  return (
    <div className="rounded-2xl bg-secondaryBg px-1">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-8">
            Video Text Description (road-facing camera)
          </AccordionTrigger>
          <AccordionContent>
            <div className="rounded-2xl bg-white p-1 text-xl">
              <p className="whitespace-pre-wrap p-8">
                {roadDescription?.toString().trim() || fallbackText}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
