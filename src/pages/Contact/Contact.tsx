import { ContactItem } from '../../shared/components/ContactItem/ContactItem';
import { SectionWrapper } from '../../shared/components/SectionWrapper/SectionWrapper';

export const Contact = () => {
  return (
    <SectionWrapper>
      <section className='flex justify-center flex-col'>
        <h3 className='text-emerald-500 text-5xl uppercase font-bold text-center'>
          Możesz się z nami kontaktować przez
        </h3>
        <div className='flex justify-center items-center gap-60 h-screen'>
          <ContactItem
            description='111 111 111'
            icon={
              <img
                src='src\images\Smartphone.svg'
                alt='Smartphone'
                className='h-54 w-54'
              />
            }
          />
          <ContactItem
            description='test@email.com'
            icon={
              <img
                src='src\images\Email.svg'
                alt='Email'
                className='h-54 w-54'
              />
            }
          />
          <ContactItem
            description={
              <a
                href='https://www.facebook.com/ekorozanka/?locale=pl_PL'
                className='underline'
                target='_blank'
              >
                Nasz facebooku
              </a>
            }
            icon={
              <img
                src='src\images\Messenger.svg'
                alt='Messenger'
                className='h-54 w-54'
              />
            }
          />
        </div>
      </section>
    </SectionWrapper>
  );
};
