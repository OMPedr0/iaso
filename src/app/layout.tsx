import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IASO - Instituto de Apoio Social do Ourondo',
  description: 'Instituição De Apoio Social do Ourondo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-stone-50'>
      <head>
      <link rel="icon" type="image/svg" href="/logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
