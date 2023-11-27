import './styles/app.scss';

import { useState } from 'react';

import { AppLoader } from './components/layout/AppLoader';
import { Footer } from './components/layout/Footer';
import { AppRouter } from './router/AppRouter';

const App = () => {
  const [appLoading, setAppLoading] = useState(true);

  return appLoading ? (
    <AppLoader setAppLoading={setAppLoading} />
  ) : (
    <div className="flex min-h-screen flex-col py-3">
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
