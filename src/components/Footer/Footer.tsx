'use client';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Facebook, Globe, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='w-full bg-[#0D1117] text-gray-200'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8'>
          {/* Product Column */}
          <div className='space-y-4'>
            <h3 className='font-semibold mb-6'>Product</h3>
            <div className='flex flex-col space-y-3 text-sm text-gray-400'>
              <Link to='#' className='hover:text-white transition-colors'>
                Pricing
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Overview
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Browse
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Accessibility
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Five
              </Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div className='space-y-4'>
            <h3 className='font-semibold mb-6'>Solutions</h3>
            <div className='flex flex-col space-y-3 text-sm text-gray-400'>
              <Link to='#' className='hover:text-white transition-colors'>
                Brainstorming
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Ideation
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Wireframing
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Research
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Design
              </Link>
            </div>
          </div>

          {/* Support Column */}
          <div className='space-y-4'>
            <h3 className='font-semibold mb-6'>Support</h3>
            <div className='flex flex-col space-y-3 text-sm text-gray-400'>
              <Link to='#' className='hover:text-white transition-colors'>
                Contact Us
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Developers
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Documentation
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Integrations
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Reports
              </Link>
            </div>
          </div>

          {/* Get the App Column */}
          <div className='space-y-4 col-span-2 md:col-span-1'>
            <h3 className='font-semibold mb-6'>Get the App</h3>
            <div className='flex flex-col space-y-3'>
              <Link to='#' className='w-36 border border-black bg-black flex rounded-xl gap-1 p-3'>
                <img src='/img/app-logo/apple.png' width={24} height={18} />
                <p className='text-[6px] flex flex-col'>
                  Download on the<span className='text-sm'>App Store</span>
                </p>
              </Link>
              <Link to='#' className='w-36 border border-black bg-black flex rounded-xl gap-1 p-3'>
                <img src='/img/app-logo/google-play-icon.svg' height={24} width={24} />
                <p className='text-[6px] flex flex-col'>
                  Get it on <span className='text-sm'>Google Play</span>
                </p>
              </Link>
            </div>
          </div>

          {/* Follow Us Column */}
          <div className='space-y-4 col-span-2 md:col-span-1'>
            <h3 className='font-semibold mb-6'>Follow Us</h3>
            <div className='flex space-x-4'>
              <Link to='#' className='hover:text-white transition-colors'>
                <Youtube className='h-5 w-5' />
                <span className='sr-only'>YouTube</span>
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                <Facebook className='h-5 w-5' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                <Twitter className='h-5 w-5' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                <Instagram className='h-5 w-5' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                <Linkedin className='h-5 w-5' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
            <div>Collers © 2023. All rights reserved.</div>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
              <Link to='#' className='hover:text-white transition-colors'>
                Terms
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Privacy
              </Link>
              <Link to='#' className='hover:text-white transition-colors'>
                Contact
              </Link>
              <Button variant='ghost' size='sm' className='text-gray-400 hover:text-white'>
                <Globe className='h-4 w-4' />
                EN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
