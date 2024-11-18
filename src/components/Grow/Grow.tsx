import { items } from '@/lib/data';
import { Link } from 'react-router-dom';

export default function Grow() {
  return (
    <div className='flex flex-col gap-5 font-roboto 3xl:w-full max-w-6xl mx-auto px-6 py-12'>
      <div>
        <h2 className='font-semibold text-4xl'>Grow your collection</h2>
        <p className='text-lg text-[#0F172A] font-normal pt-5'>
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum
          pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed
          interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className='flex justify-between pt-6'>
        <div className='w-[20%]'>
          <ul className='text-lg'>
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  to='/'
                  className='flex items-center gap-3 hover:shadow-lg p-3 rounded-lg pt-6 pl-5 pr-5 relative group'
                >
                  <item.icon className={item.size} />
                  {item.text}
                  {/* Arrow element */}
                  <span className='absolute right-3 transform opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300'>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='pt-6 pr-2 w-1/2'>
          <div className='flex items-center justify-center ml-16 shadow-2xl p-3 rounded-2xl'>
            <div className='h-full w-full object-cover flex items-center justify-center'>
              <img src='/img/products/4.png' alt='Sneaker' className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
