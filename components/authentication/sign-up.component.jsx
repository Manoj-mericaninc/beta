'use client';
import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {
  return (
    <section class='flex flex-col md:flex-row h-screen items-center'>
      <div
        class='w-full md:max-w-md lg:max-w-full md:mx-auto mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center bg-secondary'
      >
        <div class='w-full h-100'>
          <h1 class='text-xl font-bold text-primary'>Welcome</h1>
          <h2 class='text-xl md:text-2xl font-bold leading-tight mt-12 text-primary'>
            Register your account with us
          </h2>

          <form
            class='mt-6'
            action='#'
            method='POST'
          >
            <div>
              <label class='block text-gray-700'>Email Address</label>
              <input
                type='email'
                name=''
                id=''
                placeholder='Enter Email Address'
                class='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none shadow-md text-lg font-medium text-primary'
                autofocus
                autocomplete
                required
              />
            </div>

            <div class='mt-4'>
              <label class='block text-gray-700'>Password</label>
              <input
                type='password'
                name=''
                id=''
                placeholder='Enter Password'
                minlength='6'
                class='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none  shadow-md text-lg font-medium text-primary'
                required
              />
            </div>
            <div class='mt-4'>
              <label class='block text-gray-700'>Password</label>
              <input
                type='password'
                name=''
                id=''
                placeholder='Confirm Password'
                minlength='6'
                class='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none  shadow-md text-lg font-medium text-primary'
                required
              />
            </div>

            <button
              type='submit'
              class='w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6'
            >
              Sign Up
            </button>
          </form>

          <hr class='my-6 border-gray-300 w-full' />

          <button
            type='button'
            class='w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300'
          >
            <div class='flex items-center justify-center bg-pro'>
              <Image
                src='./assets/images/google.svg'
                alt='google-icon'
                width={24}
                height={24}
              />
              <span class='ml-4'>Sign Up with Google</span>
            </div>
          </button>

          <p class='mt-8'>
            Already have an account?
            <Link
              href='/login'
              class='text-blue-500 hover:text-blue-700 font-semibold ml-4'
            >
              Sign in to your account
            </Link>
          </p>
        </div>
      </div>
      <div class='bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen'>
        <Image
          src='/assets/images/auth.jpg'
          alt='auth time'
          class='w-full h-full object-cover'
          width={700}
          height={500}
        />
      </div>
    </section>
  );
};

export default SignUp;
