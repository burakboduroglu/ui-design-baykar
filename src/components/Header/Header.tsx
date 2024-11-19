import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { headers } from '@/lib/data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='px-6 py-4 max-w-7xl mx-auto font-roboto'>
      <nav className='flex items-center justify-between'>
        <Link
          to='hero'
          smooth={true}
          duration={500}
          className='text-3xl font-bold text-headerColor cursor-pointer'
        >
          Collers
        </Link>
        <div className='hidden md:flex items-center space-x-8'>
          {headers.map((navItem, index) => (
            <div
              className='flex text-headerColor text-base font-medium gap-2 pt-3 pb-3 pr-2 pl-2'
              key={navItem.name}
            >
              {index === 5 ? (
                <Link
                  to={navItem.link}
                  smooth={true}
                  duration={500}
                  className='p-3 border-2 rounded-lg border-headerColor cursor-pointer'
                >
                  {navItem.name}
                </Link>
              ) : (
                <Link to={navItem.link} smooth={true} duration={500} className='cursor-pointer'>
                  {navItem.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-headerColor'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className='md:hidden mt-2'>
          <div className='flex flex-col space-y-4'>
            {headers.map((navItem) => (
              <Link
                key={navItem.name}
                to={navItem.link}
                smooth={true}
                duration={500}
                className='text-headerColor text-base font-medium cursor-pointer'
                onClick={toggleMenu}
              >
                {navItem.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
