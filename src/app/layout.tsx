import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/organism/Navbar';
import Footer from '@/components/organism/Footer';
import { Saira } from 'next/font/google';

const saira = Saira({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'FurniShop',
  description: 'Furnitur Impian, Kenyamanan Nyata.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`relative antialiased`}>
        <Navbar />
        <main className={`${saira.className}`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
