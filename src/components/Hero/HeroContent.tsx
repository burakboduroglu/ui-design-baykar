import { Link } from 'react-router-dom';

export default function HeroContent() {
  return (
    <section className='space-y-6 text-center lg:text-start'>
      <h1 className=' text-6xl font-extrabold'>Collectible Sneakers</h1>
      <p className='text-lg font-normal'>
        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem
        mauris. Pharetra, eu imperdiet ipsum ultrices amet.
      </p>
      <div className='flex items-center justify-center lg:justify-start space-x-4 text-headerColor text-base font-medium gap-4'>
        <Link to='/signup' className='p-3 gap-2 border-2 rounded-lg border-headerColor'>
          Sign up now
        </Link>
        <Link to='/' className='flex justify-center items-center'>
          <svg
            className='w-5 h-5 mr-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='12' cy='12' r='10' strokeWidth='2' />
            <path strokeWidth='2' d='M10 8l6 4-6 4V8z' />
          </svg>
          Watch Demo
        </Link>
      </div>
    </section>
  );
}
