import { Link } from 'react-router-dom';
import ListIcon from 'svg/list.svg?react';
import SettingsIcon from 'svg/settings.svg?react';
import SquareIcon from 'svg/square.svg?react';

import { EventsList } from './EventsList';

export const EventsSidebar = () => {
  return (
    <aside className="flex flex-col self-start rounded-2xl bg-secondaryBg px-1 py-6">
      <div className="mb-6 px-6">
        <Link to="/" className="flex font-semibold">
          <SquareIcon className="mr-3" /> Nexar
        </Link>
      </div>
      <div className="mb-4 rounded-2xl bg-white p-6">
        <p className="flex font-semibold">
          <ListIcon className="mr-3" />
          Events
        </p>
      </div>
      <EventsList />
      <div className="mt-auto">
        <p className="flex px-6 font-semibold">
          <SettingsIcon className="mr-3" />
          Settings
        </p>
      </div>
    </aside>
  );
};
