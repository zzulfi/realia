import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Realia 23',
  description: 'Deconstructing Disinformation',
  keywords: ['realia', 'realia.live', 'asas', 'dhiu', 
  'darul huda', 'dhiu arts fest',
   'dhiu rabee fest', 'rabee fest dhiu', 'realia23'
    , 'sibaq' , 'result portal realia' , 'dhiu chemmad']
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
