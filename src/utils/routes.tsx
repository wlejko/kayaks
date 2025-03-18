import { Gallery } from '../pages/Gallery/Gallery';
import { Home } from '../pages/Home/Home';

export const routes = [
  { element: <Home />, path: '/', id: 'home' },
  { element: <Gallery />, path: '/gallery', id: 'gallery' },
];
