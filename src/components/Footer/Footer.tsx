'use client';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Facebook, Globe, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='w-full bg-[#0F172A] text-[#E2E8F0] pl-36 pr-36 text-center lg:text-start'>
      <div className='container mx-auto px-4 py-12'>
        <div className='lg:grid lg:grid-cols-4 gap-8 flex flex-col'>
          {/* Product Column */}
          <div className='space-y-4 pb-10 lg:pb-0'>
            <h3 className='font-semibold mb-6'>Product</h3>
            <div className='flex flex-col space-y-3 text-sm gap-[18px]'>
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
          <div className='space-y-4 pb-10 lg:pb-0'>
            <h3 className='font-semibold mb-6'>Solutions</h3>
            <div className='flex flex-col space-y-3 text-sm gap-[18px]'>
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
          <div className='space-y-4 pb-10 lg:pb-0'>
            <h3 className='font-semibold mb-6'>Support</h3>
            <div className='flex flex-col space-y-3 text-sm gap-[18px]'>
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

          {/* Get the App Column and Social Media */}
          <div className='space-y-4 col-span-1 lg:pb-0'>
            <h3 className='font-semibold mb-6'>Get the App</h3>
            <div className='flex flex-col space-y-3 items-center lg:items-start'>
              <Link
                to='#'
                className='w-36 border border-gray-400 bg-black flex rounded-xl gap-3 p-3'
              >
                <img src='/img/app-logo/apple.svg' width={24} height={24} />
                <p className='text-[8px] flex flex-col'>
                  Download on the<span className='text-sm'>App Store</span>
                </p>
              </Link>
              <Link
                to='#'
                className='w-36 border border-gray-400 bg-black flex rounded-xl gap-3 p-3'
              >
                <img src='/img/app-logo/google-play-icon.svg' height={20} width={20} />
                <p className='text-[8px] flex flex-col'>
                  Get it on <span className='text-sm'>Google Play</span>
                </p>
              </Link>
            </div>
            <h3 className='font-semibold mb-6 pt-5'>Follow Us</h3>
            <div className='flex space-x-6'>
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
      <div className='border-t border-gray-800 pt-10 lg:pt-0'>
        <div className='container mx-auto lg:px-3 py-4'>
          <div className='flex flex-col lg:flex-row justify-between items-center text-xs lg:text-sm'>
            <div>Collers © 2023. All rights reserved.</div>
            <div className='flex items-center space-x-4 mt-4'>
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
