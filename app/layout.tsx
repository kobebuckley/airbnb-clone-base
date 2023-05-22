import {Nunito} from "next/font/google"

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./components/navbar/Navbar"
import ClientOnly from './components/ClientOnly'

import RegisterModal from "./hooks/RegisterModal"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'A clone of Airbnb',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
