import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Next Boilerplate',
  description: 'Boilerplate for Next projects',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang='en'>
    <body>
      {children}
    </body>
  </html>
);

export default RootLayout;
