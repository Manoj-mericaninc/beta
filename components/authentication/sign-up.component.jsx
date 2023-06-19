'use client';

import Link from 'next/link';

const SignUp = (props) => {
  const { signUp, email, Password, buttonText, confirmPassword } = props;
  return (
    <div className="flex justify-center items-center  bg-[url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] bg-no-repeat bg-cover bg-fixed">
      <div className='my-8 sm:mx-auto sm:w-full sm:max-w-sm  p-10 rounded-xl  backdrop-blur-[3px] bg-white/5 border-2 border-slate-300'>
        <h2 className='mb-8 text-2xl font-bold leading-9 tracking-tight text-center text-gray-700'>
          {signUp}
        </h2>

        <form
          className='space-y-6'
          action='#'
          method='POST'
        >
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-800'
            >
              {email}
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-700'
              >
                {Password}
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium leading-6 text-gray-700'
              >
                {confirmPassword}
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='confirmPassword'
                name='confirmPassword'
                type='confirmPassword'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              {buttonText}
            </button>
          </div>
        </form>
        <p className='mt-10 text-sm text-center text-gray-500'>
          <span>
            Already have an account?
            <Link
              href='/login'
              className='ml-1 text-blue-600 cursor-pointer'
            >
              Login here..
            </Link>
          </span>
          <button
            aria-label='Continue with google'
            role='button'
            className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-6'
          >
            <img
              src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg'
              alt='google'
            />
            <p className='ml-4 text-base font-medium text-gray-700'>
              Continue with Google
            </p>
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
