import { ReactElement } from 'react';

type ContactItemProps = {
  icon: ReactElement;
  description: string | ReactElement;
};

export const ContactItem = ({ icon, description }: ContactItemProps) => {
  return (
    <div className='flex items-center flex-col gap-3 w-3xs text-center text-emerald-400 font-bold text-3xl'>
      <div>{icon}</div>
      <div className='mt-8'>{description}</div>
    </div>
  );
};
