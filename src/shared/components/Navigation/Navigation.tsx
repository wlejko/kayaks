import { NavigationLink } from '../NavigationLink/NavigationLink';

export const Navigation = () => {
  return (
    <div className='h-16 border-b-[1px] bg-emerald-400 border-b-gray-300 flex items-center justify-center gap-10 fixed w-full z-50'>
      <NavigationLink name='spływy' link='/' />
      <NavigationLink name='cennik' link='cennik' />
      <NavigationLink name='kontakt' link='kontakt' />
    </div>
  );
};
