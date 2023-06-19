import { SignUp } from '@/components/authentication/';

const page = () => {
  return (
    <SignUp
      signUp='Create an Account'
      email='Email Address'
      Password='Password'
      confirmPassword='Confirm Password'
      buttonText='SignUp'
    />
  );
};

export default page;
