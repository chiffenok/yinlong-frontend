import './globals.css';
import { Inter } from 'next/font/google';

import Header from '../components/Header';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yinlong frontend',
  description:
    'Code project with Next.js, GraphQL, Apollo client and Keystone on backend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
