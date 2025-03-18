import { NavigationLink } from '../NavigationLink/NavigationLink';

export const Navigation = () => {
  return (
    <div className='h-16 border-b-[1px] border-b-gray-300 flex items-center justify-center gap-10'>
      <NavigationLink name='główna' link='/' />
      <NavigationLink name='galeria' link='gallery' />
      <NavigationLink name='kontakt' link='contact' />
    </div>
  );
};
