export default function Location() {
  return (
    <div
      className='bg-[#78350F] flex flex-col justify-center items-center text-center min-h-screen font-roboto bg-50% bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/img/location/group.png')" }}
    >
      <div className='text-white'>
        <p className='flex flex-col gap-5'>
          <span className='font-bold text-7xl'>11,658,467</span>
          <span className='text-4xl font-semibold'>Shoes Collected</span>
        </p>
      </div>
    </div>
  );
}
