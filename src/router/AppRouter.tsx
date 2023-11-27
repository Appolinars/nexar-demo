import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { EventArticle } from '@/modules/events/EventArticle/EventArticle';
import { EventsPage } from '@/modules/events/EventsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EventsPage />,
    children: [
      {
        path: ':eventId',
        element: <EventArticle />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
