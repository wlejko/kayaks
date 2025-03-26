export const Footer = () => {
  return (
    <div className='bg-emerald-400 flex items-center flex-col py-4 gap-4'>
      <h3 className='m-0 p-0 text-gray-700'>Znajdziesz nas na</h3>
      <div className='flex items-center gap-8'>
        <a className='cursor-pointer'>
          <img
            src='src\images\Instagram.svg'
            alt='instagram'
            className='h-13'
          />
        </a>
        <a className='cursor-pointer'>
          <img
            src='src\images\Facebook.svg'
            alt='facebook'
            className='h-11 bg-white'
          />
        </a>
      </div>
    </div>
  );
};
