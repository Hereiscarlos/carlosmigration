import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
   subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
