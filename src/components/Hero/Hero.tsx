import HeroImage from './HeroImage.tsx';
import HeroContent from './HeroContent.tsx';
import HeroFeature from './HeroFeature.tsx';

export default function Hero() {
  return (
    <div
      className='relative bg-no-repeat bg-cover min-h-screen'
      style={{
        backgroundImage: 'url(/img/bg-hero.png)',
      }}
    >
      <main className='px-6 py-10 max-w-7xl mx-auto font-roboto text-heroColor relative w-full overflow-hidden'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <HeroContent />
          <HeroImage />
        </div>
        <div className='pt-8'>
          <HeroFeature />
        </div>
      </main>
    </div>
  );
}
