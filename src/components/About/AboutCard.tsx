import { Link } from 'react-router-dom';

export default function AboutCard() {
  return (
    <div className='w-3/4 rounded-2xl overflow-hidden shadow-2xl bg-white p-16 font-roboto m-28'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='gap-24 pt-5'>
          <h2 className='font-bold text-3xl pb-5'>Why join us</h2>
          <div className='text-base pt-3'>
            <ul className='space-y-2'>
              <li className='flex items-start'>
                <span className='text-[#15803D] mr-2'>✓</span>
                <span>Est et in pharetra magna adipiscing ornare aliquam.</span>
              </li>
              <li className='flex items-start'>
                <span className='text-[#15803D] mr-2'>✓</span>
                <span>Tellus arcu sed consequat ac velit ut eu blandit.</span>
              </li>
              <li className='flex items-start'>
                <span className='text-[#15803D] mr-2'>✓</span>
                <span>Ullamcorper ornare in et egestas dolor orci.</span>
              </li>
            </ul>
          </div>
          <div className='mt-12'>
            <Link
              className='p-3 border-2 rounded-lg border-headerColor cursor-pointer text-headerColor'
              to='/'
            >
              Sign up now
            </Link>
          </div>
        </div>
        <div
          className='relative ml-16 shadow-2xl p-3 rounded-2xl bg-no-repeat bg-left bg-cover overflow-auto'
          style={{
            backgroundImage: 'url(/img/Backlights.png)',
          }}
        >
          <div className='h-full w-full object-cover flex items-center justify-center'>
            <img src='/img/about.png' alt='Sneaker' className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
}
