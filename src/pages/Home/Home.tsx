import { Card } from '../../shared/components/Card/Card';
import { SectionWrapper } from '../../shared/components/SectionWrapper/SectionWrapper';

export const Home = () => {
  return (
    <div>
      <div className='relative text-center  '>
        <img src='./src/images/hero.jpg' className='brightness-50' alt='hero' />
        <div className='m-0 p-0 absolute top-[70%] flex justify-center w-full text-3xl'>
          <div className='bg-emerald-400 w-72 h-72 z-10 rounded-[50%] flex items-center justify-center text-gray-700 text-3xl'>
            Spływy kajakowe po Bugu
          </div>
        </div>
      </div>
      <SectionWrapper>
        <section className='mt-52 flex items-center flex-col gap-20'>
          <Card
            description='Czwarta pod względem długości rzeka w Polsce, będąca dopływem Narwi, przepływająca przez zachodnią Ukrainę, zachodnią Białoruś i wschodnią Polskę.
            Długość Bugu wynosi 772 km, a powierzchnia dorzecza 39 420 km². Z tego największa część leży na terenie Polski – 19,4 tys. km² (49,2%). Na terenie Ukrainy leży 10,8 tys. km² (27,4%) obszaru zlewni, na Białorusi natomiast 9,2 tys. km² (23,3%). Średni przepływ w dolnym biegu, w Wyszkowie, wynosi 154 m³/s, co czyni go czwartą co do wielkości rzeką Polski'
            img='src\images\bug.jpg'
            title='Rzeka Bug'
          />
          <Card
            description='Nie musisz się martwić o sprzęt. Zapewniamy sprzęt dobrej jakości z którego każdy będzie zadowolony. Mamy dużą liczbe kajaków, nie trzeba martwić się, że komuś zabraknie. Po wcześniejszym kontakcie i ustaleniu szczegółów znajdziemy coś dla każdego miłośnika kajakowania.'
            img='src\images\card1.jpg'
            title='Sprzęt'
            reverse
          />
          <Card
            description='Po wszystkim możemy zorganizować ognisko na którym będzie można odpocząć po ciężkim dniu spędzonym nad wodą w kajaku. '
            img='src\images\ognisko.jpg'
            title='Ognisko'
          />
          <Card
            description='Jeżeli przyjechali państwo z daleko możemy za pośrednictwem zaprzyjaźnionego nam ośrodka Eko Różanka zorganizować noclegi. Należy uprzedzić wcześniej o potrzebie zorganizowania takiego noclegu ponieważ nie zawsze w ośrodku może być miejsce w okresie letnim.'
            img='src\images\jezioro.jpg'
            title='Jezioro Białe'
            reverse
          />
        </section>
      </SectionWrapper>
    </div>
  );
};
