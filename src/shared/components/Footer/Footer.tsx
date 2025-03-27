import instagram from '../../../images/Instagram.svg';
import facebook from '../../../images/Facebook.svg';

export const Footer = () => {
  return (
    <div className='bg-emerald-400 flex items-center flex-col py-4 gap-4'>
      <h3 className='m-0 p-0 text-gray-700'>Znajdziesz nas na</h3>
      <div className='flex items-center gap-8'>
        <a className='cursor-pointer'>
          <img src={instagram} alt='instagram' className='h-13' />
        </a>
        <a className='cursor-pointer'>
          <img src={facebook} alt='facebook' className='h-11 bg-white' />
        </a>
      </div>
    </div>
  );
};
