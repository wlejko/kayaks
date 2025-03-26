import { ReactElement } from 'react';

type SectionWrapperProps = {
  children: ReactElement;
};

export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <div className='w-screen rounded-md bg-white p-16 '>{children}</div>;
};
