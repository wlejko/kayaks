import { pricesTable } from '../../consts/pricesTable';
import { PriceConatinsItem } from '../../shared/components/PriceContainsItem/PriceConatinsItem';
import { SectionWrapper } from '../../shared/components/SectionWrapper/SectionWrapper';
import kayakGreen from '../../images/KayakGreen.svg';
import campfire from '../../images/Campfire.svg';
import car from '../../images/Car.svg';

export const Prices = () => {
  return (
    <SectionWrapper>
      <section className='flex justify-center flex-col gap-20'>
        <h3 className='text-emerald-500 text-5xl uppercase font-bold text-center'>
          Cennik
        </h3>
        <table className='border-separate border-spacing-y-8 '>
          <tr>
            <th>Trasa</th>
            <th>Czas</th>
            <th>Długość</th>
            <th>Cena od osoby</th>
          </tr>
          {pricesTable.map((item, index) => (
            <tr
              key={`${item.route}-${index}`}
              className='p-4 even:bg-emerald-200 odd:bg-white'
            >
              <td className='text-center py-4'>{item.route}</td>
              <td className='text-center py-4'>{item.time} h</td>
              <td className='text-center py-4'>{item.distance} km</td>
              <td className='text-center py-4'>{item.price} zł</td>
            </tr>
          ))}
        </table>
        <div className='flex flex-col gap-12'>
          <h3 className='text-emerald-500 text-4xl uppercase font-bold text-center'>
            Cena zawiera
          </h3>
          <div className='flex justify-center gap-28'>
            <PriceConatinsItem
              icon={<img src={car} alt='car' className='h-16' />}
              description='Transport na miejsce startu i powrót do samochodów'
            />
            <PriceConatinsItem
              icon={<img src={kayakGreen} alt='kayak' className='h-16' />}
              description='Wynajem kajaków z osprzętem'
            />
            <PriceConatinsItem
              icon={<img src={campfire} alt='campfire' className='h-16' />}
              description='Istnieje możliwość zorganizowania ogniska. Organizacja ogniska jest za dodatkową opłatą.'
            />
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};
