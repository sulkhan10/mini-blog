import './globals.css';
import type { Metadata } from 'next';
import { Gochi_Hand } from 'next/font/google';
import { preload } from 'react-dom';

const gochi_hand = Gochi_Hand({
  preload: true,
  weight: '400',
  display: 'swap',
  styles: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MINI BLOG',
  description: 'MINI BLOG ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gochi_hand.className}>{children}</body>
    </html>
  );
}
