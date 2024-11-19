export default function HeroImage() {
  return (
    <section className='relative w-full h-[350px] ml-12'>
      <div className='absolute right-0 top-[50%] -translate-y-1/2 w-[320px] h-[320px] bg-[#FBBF24] rounded-end-50px mr-28'>
        <div className='pl-6'>
          <img
            src='/img/nike.png'
            alt='Hero Image'
            className='absolute w-[370px] h-[375px] rounded-end-50px rotate-[14deg]'
          />
        </div>
      </div>
    </section>
  );
}
