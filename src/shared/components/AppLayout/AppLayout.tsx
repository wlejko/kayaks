import { Outlet } from 'react-router';
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';

export const AppLayout = () => {
  return (
    <div className='font-serif'>
      <Navigation />
      <div className='flex justify-center pt-16'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
