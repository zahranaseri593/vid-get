import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Share_Tech } from 'next/font/google'
 
const roboto = Share_Tech({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'VidGet',
  description: 'cpyright free videos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body  className={roboto.className}>
        <Navbar />
        <main className="min-h-screen p-5 max-w-[100rem] mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
