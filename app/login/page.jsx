import { Login } from '@/components/authentication/';

const page = () => {
  return (
    <Login
      signIn='Sign In Account'
      email='Email Address'
      Password='Password'
      buttonText='Login'
    />
  );
};

export default page;
