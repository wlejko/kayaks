import { Contact } from '../pages/Contact/Contact';
import { Home } from '../pages/Home/Home';
import { Prices } from '../pages/Prices/Prices';

export const routes = [
  { element: <Home />, path: '/', id: 'home' },
  { element: <Prices />, path: '/cennik', id: 'cennik' },
  { element: <Contact />, path: '/kontakt', id: 'kontakt' },
];
