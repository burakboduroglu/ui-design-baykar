import { Trophy, Tunnel, Tv } from 'iconoir-react';

export default function HeroFeature() {
  const features = [
    { icon: Trophy, title: 'Nibh viverra', bgColor: 'bg-blue-100' },
    { icon: Tunnel, title: 'Cursus amet', bgColor: 'bg-green-100' },
    { icon: Tv, title: 'Ipsum fermentum', bgColor: 'bg-purple-100' },
  ];

  return (
    <section className='flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-32 text-center lg:text-start'>
      {features.map((feature, index) => (
        <div key={index} className='w-full space-y-2'>
          <div
            className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mx-auto lg:mx-0`}
          >
            <feature.icon height={24} width={24} className='text-headerColor' />
          </div>
          <h3 className='text-xl font-semibold pt-1'>{feature.title}</h3>
          <p className='text-heroColor font-normal text-base'>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque
            leo, massa.
          </p>
        </div>
      ))}
    </section>
  );
}
