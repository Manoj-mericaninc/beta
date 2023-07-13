'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsPeopleFill, BsFillPersonFill } from 'react-icons/bs';
import { FaPeopleCarry, FaFileInvoiceDollar } from 'react-icons/fa';
import { MdViewTimeline, MdLogout } from 'react-icons/md';

const sidebarItem = [
  { id: 1, icon: <BsPeopleFill />, text: 'Employees', href: '' },
  { id: 2, icon: <BsFillPersonFill />, text: 'Clients', href: '' },
  { id: 3, icon: <FaPeopleCarry />, text: 'Vendors ', href: '' },
  { id: 4, icon: <MdViewTimeline />, text: '', href: '' },
  { id: 5, icon: <FaFileInvoiceDollar />, text: '', href: '' },
];

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div
      ref={ref}
      className='fixed w-56 h-full shadow-lg bg-secondary'
    >
      <div className='flex justify-center mt-6 mb-14'>
        <Image
          src='/assets/images/logo.png'
          alt='company logo'
          width={120}
          height={30}
        />
      </div>

      <div className='flex flex-col'>
        <Link href='/'>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/'
                ? 'bg-cyan-100 text-cyan-500'
                : 'text-gray-400 hover:bg-cyan-100 hover:text-cyan-500'
            }`}
          >
            <div className='mr-2'>
              <BsPeopleFill className='w-5 h-5' />
            </div>
            <div>
              <p>Employees</p>
            </div>
          </div>
        </Link>
        <Link href='/clients'>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/account'
                ? 'bg-cyan-100 text-cyan-500'
                : 'text-gray-400 hover:bg-cyan-100 hover:text-cyan-500'
            }`}
          >
            <div className='mr-2'>
              <BsFillPersonFill className='w-5 h-5' />
            </div>
            <div>
              <p>Clients</p>
            </div>
          </div>
        </Link>
        <Link href='/vendor'>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/billing'
                ? 'bg-orange-100 text-cyan-500'
                : 'text-gray-400 hover:bg-cyan-100 hover:text-cyan-500'
            }`}
          >
            <div className='mr-2'>
              <FaPeopleCarry className='w-5 h-5' />
            </div>
            <div>
              <p>Vendors</p>
            </div>
          </div>
        </Link>
        <Link href='/timesheets'>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/billing'
                ? 'bg-orange-100 text-cyan-500'
                : 'text-gray-400 hover:bg-cyan-100 hover:text-cyan-500'
            }`}
          >
            <div className='mr-2'>
              <MdViewTimeline className='w-5 h-5' />
            </div>
            <div>
              <p>Time sheets</p>
            </div>
          </div>
        </Link>
        <Link href='/invoices'>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/billing'
                ? 'bg-orange-100 text-cyan-500'
                : 'text-gray-400 hover:bg-cyan-100 hover:text-cyan-500'
            }`}
          >
            <div className='mr-2'>
              <FaFileInvoiceDollar className='w-5 h-5' />
            </div>
            <div>
              <p>Invoices</p>
            </div>
          </div>
        </Link>
        <Link href='/Logout'>
          <div
            className={`pl-6 mt-20 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == '/billing'
                ? 'bg-orange-100 text-cyan-500'
                : 'text-gray-400 hover:bg-cyan-100 hover:text-cyan-500'
            }`}
          >
            <div className='mr-2'>
              <MdLogout className='w-5 h-5' />
            </div>
            <div>
              <p>Logout</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = 'SideBar';

export default SideBar;
