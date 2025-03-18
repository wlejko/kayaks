import { Outlet } from 'react-router';
import { Navigation } from '../Navigation/Navigation';

export const AppLayout = () => {
  return (
    <div>
      <Navigation />
      <div className='bg-amber-300 h-screen flex justify-center pt-10'>
        <Outlet />
      </div>
    </div>
  );
};
