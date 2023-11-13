import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lexical Rich Text Editor | Next.js 14',
  description: 'Sample Lexical Rich Text Editor',
  keywords: ['lexical', 'lexical rich text editor', 'next.js', 'next.js 14'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
