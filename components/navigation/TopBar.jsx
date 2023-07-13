import { Fragment } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { CiEdit, CiSettings } from 'react-icons/ci';
import { MdOutlineSort } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Menu, Transition, Popover } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';

export default function TopBar({ showNav, setShowNav }) {
  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] shadow-lg ${
        showNav ? 'pl-56' : ''
      }`}
    >
      <div className='pl-4 md:pl-16'>
        <MdOutlineSort
          className='w-8 h-8 text-gray-700 cursor-pointer'
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className='flex items-center pr-4 md:pr-16'>
        <Popover className='relative'>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform scale-95'
            enterTo='transform scale-100'
            leave='transition ease-in duration=75'
            leaveFrom='transform scale-100'
            leaveTo='transform scale-95'
          >
            <Popover.Panel className='absolute z-50 w-screen max-w-xs mt-2 bg-white rounded shadow-sm -right-16 sm:right-4 sm:max-w-sm'></Popover.Panel>
          </Transition>
        </Popover>
        <Menu
          as='div'
          className='relative inline-block text-left'
        >
          <div>
            <Menu.Button className='inline-flex items-center justify-center w-full'>
              <picture>
                <Image
                  src='/assets/images/favicon.jpeg'
                  className='h-8 border-2 border-white rounded-full shadow-sm md:mr-4'
                  alt='profile picture'
                  width={36}
                  height={36}
                />
              </picture>
              <span className='hidden font-medium text-gray-700 md:block'>
                Name
              </span>
              <IoMdArrowDropdown className='w-4 h-4 ml-2 text-gray-700' />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform scale-95'
            enterTo='transform scale-100'
            leave='transition ease-in duration=75'
            leaveFrom='transform scale-100'
            leaveTo='transform scale-95'
          >
            <Menu.Items className='absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white rounded shadow-sm'>
              <div className='p-1'>
                <Menu.Item>
                  <Link
                    href='#'
                    className='flex items-center p-2 text-sm text-gray-700 transition-colors rounded hover:bg-cyan-500 hover:text-white group'
                  >
                    <BsPersonCircle className='w-4 h-4 mr-2' />
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href='#'
                    className='flex items-center p-2 text-sm text-gray-700 transition-colors rounded hover:bg-cyan-500 hover:text-white group'
                  >
                    <CiEdit className='w-4 h-4 mr-2' />
                    Edit
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href='#'
                    className='flex items-center p-2 text-sm text-gray-700 transition-colors rounded hover:bg-cyan-500 hover:text-white group'
                  >
                    <CiSettings className='w-4 h-4 mr-2' />
                    Settings
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
