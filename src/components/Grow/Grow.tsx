import { items } from '@/lib/data';
import { Link } from 'react-router-dom';

export default function Grow() {
  return (
    <div
      className='bg-no-repeat bg-left-bottom bg-contain'
      style={{ backgroundImage: "url('/img/grow/Waves.png')" }}
    >
      <div className='relative items-center font-roboto 3xl:w-full max-w-6xl mx-auto px-6 mt-16 min-h-screen'>
        <div>
          <h2 className='font-semibold text-4xl'>Grow your collection</h2>
          <p className='text-lg text-[#0F172A] font-normal pt-5'>
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum
            pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed
            interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
          </p>
        </div>

        <div className='flex justify-between mt-10'>
          <div className='w-[20%]'>
            <ul className='text-lg'>
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
          </div>

          <div className='flex justify-center items-center w-full'>
            <div className='flex items-center justify-center pl-56'>
              <div className='items-center justify-center'>
                <img src='/img/Col.png' alt='Sneaker' className='h-full w-full' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
