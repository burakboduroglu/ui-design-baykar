import { products } from '@/lib/data';
import { Cart } from 'iconoir-react';

export default function Shop() {
  return (
    <div
      className='bg-[#0F172A] min-h-screen p-8 bg-no-repeat bg-contain bg-center'
      style={{
        backgroundImage: 'url(/img/Backlights.png)',
      }}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Shop Header */}
        <div className='flex lg:justify-between items-center mb-5 lg:mb-12 flex-col justify-center md:items-center'>
          <h1 className='text-2xl lg:text-4xl font-bold text-white'>The best of the best</h1>
          <button className='lg:pt-0 mt-5 text-lg px-6 py-2 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors'>
            Sign up now
          </button>
        </div>

        {/* Product Grid */}
        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {products.map((product) => (
            <div key={product.id} className='relative group m-3'>
              {/* Card Content */}
              <div className='relative bg-[#151922] rounded-2xl overflow-hidden'>
                {/* Image Container */}
                <div className='aspect-[4/3] overflow-hidden'>
                  <img
                    src={product.image}
                    alt='Sneaker'
                    className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300'
                  />
                </div>

                {/* Text Content */}
                <div className='p-6 pt-10'>
                  <h2 className='text-2xl font-semibold text-white mb-2'>{product.title}</h2>
                  <p className='pt-3 text-white text-lg mb-6'>{product.description}</p>
                  <button className='w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-white/20 text-white hover:bg-white/10 transition-colors'>
                    <Cart className='w-4 h-4' />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
