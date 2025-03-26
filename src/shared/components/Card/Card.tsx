type CardProps = {
  title: string;
  img: string;
  description: string;
  reverse?: boolean;
};

export const Card = ({ img, title, description, reverse }: CardProps) => {
  return (
    <div className='border-[1px] border-emerald-400 w-3/4 rounded-md flex'>
      {!reverse && <img src={img} className='h-80 w-[450px]' />}
      <div className='text-gray-700 flex flex-col mt-6 ml-6 mr-6'>
        <p className='uppercase text-emerald-400 text-3xl'>{title}</p>
        <p className='mt-4 text-2xl'>{description}</p>
      </div>
      {reverse && <img src={img} className='h-80 w-[450px]' />}
    </div>
  );
};
