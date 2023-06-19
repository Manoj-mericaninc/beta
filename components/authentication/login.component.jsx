'use client';
import Link from 'next/link';

const Login = (props) => {
  const { signIn, email, Password, buttonText } = props;

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[url('https://wallpaper.dog/large/11027692.jpg')] bg-center bg-no-repeat bg-cover">
      <div className='sm:mx-auto sm:w-full sm:max-w-sm  p-10 rounded-xl  backdrop-blur-[2px] bg-white/5 border-2 border-slate-300'>
        <h2 className='mb-8 text-2xl font-bold leading-9 tracking-tight text-center text-gray-700'>
          {signIn}
        </h2>

        <form className='space-y-6'>
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
            Don't have an account?
            <Link
              href='/register'
              className='ml-1 text-blue-600 cursor-pointer'
            >
              SignUp here..
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

export default Login;
