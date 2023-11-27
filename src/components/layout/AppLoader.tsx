import loaderBg from 'images/loader-bg.webp';
import { Dispatch, SetStateAction, useEffect } from 'react';
import LogoIcon from 'svg/nexar-logo-full.svg?react';

interface IAppLoader {
  setAppLoading: Dispatch<SetStateAction<boolean>>;
}

export const AppLoader = ({ setAppLoading }: IAppLoader) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [setAppLoading]);

  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <img
        className="absolute left-0 top-0 -z-1 h-full w-full object-cover"
        src={loaderBg}
        alt="Background"
      />
      <LogoIcon />
    </div>
  );
};
