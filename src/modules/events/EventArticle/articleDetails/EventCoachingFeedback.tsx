import { MouseEvent, useState } from 'react';
import EditIcon from 'svg/pen.svg?react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { Textarea } from '@/components/ui/Textarea';

export const EventCoachingFeedback = ({ feedback }: { feedback: string }) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [feedbackState, setFeedbackState] = useState(feedback);
  const [inputValue, setInputValue] = useState('');

  const handleEditClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setInputValue(feedbackState);
    setShowEditDialog(true);
  };

  const handleEditSave = () => {
    setInputValue('');
    setFeedbackState(inputValue);
    setShowEditDialog(false);
  };

  return (
    <>
      <div className="rounded-2xl bg-secondaryBg px-1">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-8">
              Driver Coaching Feedback
              <Button
                className="ml-auto mr-2 inline-flex items-center rounded-3xl text-base"
                size="small"
                onClick={handleEditClick}
                asChild
              >
                <span aria-roledescription="button">
                  <EditIcon className="mr-2" />
                  Edit
                </span>
              </Button>
            </AccordionTrigger>
            <AccordionContent>
              <div className="rounded-2xl bg-white p-1 text-xl">
                <p className="mb-8 p-8">{feedbackState}</p>
                <Button className="w-full">Send instructions to the driver</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
            <DialogDescription>Edit the driver coaching instructions</DialogDescription>
          </DialogHeader>
          <Textarea
            className="min-h-[110px]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={handleEditSave}>Save</Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
