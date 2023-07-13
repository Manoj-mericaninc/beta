import { Navigation } from '@/components';
import '@/styles/global.css';
export const metadata = {
  title: 'Zen Time',
  description: 'Zen Time application to manage time sheets',
};

const ClientLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link
          rel='shortcut icon'
          href='/assets/images/favicon.jpeg'
          type='image/x-icon'
        />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
};

export default ClientLayout;
