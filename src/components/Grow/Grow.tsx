import { items } from '@/lib/data';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { MoveLeft, MoveRight } from 'lucide-react';

export default function Grow() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div
      className='bg-no-repeat bg-left-bottom bg-contain'
      style={{ backgroundImage: "url('/img/grow/Waves.png')" }}
    >
      <div className='3xl:w-full max-w-6xl mx-auto px-6 mt-5 lg:mt-16 min-h-screen'>
        <div className='text-center lg:text-start w-3/4 lg:w-full mx-auto lg:mx-0'>
          <h2 className='font-semibold lg:text-4xl text-2xl'>Grow your collection</h2>
          <p className='text-sm lg:text-lg text-[#0F172A] font-normal pt-5'>
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum
            pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed
            interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
          </p>
        </div>

        <div className='flex flex-col items-center lg:justify-between mt-10'>
          <div className='w-full lg:w-[20%]'>
            <ul className='hidden lg:flex lg:flex-col text-base lg:text-lg'>
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    to='/'
                    className='flex items-center gap-3 hover:shadow-xl p-3 rounded-lg relative group font-medium text-base'
                  >
                    <item.icon className={item.size} />
                    <span className='pt-1'>{item.text}</span>
                    <span className='absolute right-3 transform opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300'>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className='lg:hidden flex items-center'>
              <div
                ref={sliderRef}
                className='flex overflow-x-auto scrollbar-hide gap-3 pt-5'
                style={{ scrollBehavior: 'smooth' }}
              >
                {items.map((item, index) => (
                  <ul key={index} className='flex-shrink-0 snap-center w-full p-3'>
                    <li key={index}>
                      <Link
                        to='/'
                        className='flex items-center gap-3 hover:shadow-xl p-1 rounded-lg relative group font-medium text-base'
                      >
                        <item.icon className={item.size} />
                        <span className='pt-1'>{item.text}</span>
                        <span className='absolute right-5 transform opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300'>
                          →
                        </span>
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
              <div className='flex gap-3 pt-5'>
                <Button variant='custom' size='icon' onClick={() => scroll('left')}>
                  <MoveLeft className='h-3 w-3' />
                </Button>
                <Button variant='custom' size='icon' onClick={() => scroll('right')}>
                  <MoveRight className='h-3 w-3' />
                </Button>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center w-full'>
            <div className='flex items-center justify-center lg:pl-56 mt-10 lg:mt-0'>
              <div className='items-center justify-center'>
                <img src='/img/grow/Col.png' alt='Sneaker' className='h-full w-full' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
