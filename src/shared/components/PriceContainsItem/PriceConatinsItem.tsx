import { ReactElement } from 'react';

type PriceConatinsItemProps = {
  icon: ReactElement;
  description: string;
};

export const PriceConatinsItem = ({
  icon,
  description,
}: PriceConatinsItemProps) => {
  return (
    <div className='flex items-center flex-col gap-3 w-3xs text-center text-gray-700'>
      <div>{icon}</div>
      <div>{description}</div>
    </div>
  );
};
