import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Providers from "./provider"
import ImportBsJS from "./importBsJS"

const poppins = Poppins({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'Proposta Express',
  description: 'Preencha sua proposta ou briefing de forma rápida e fácil!',
  authors: [{
    name: "Aenã Martinelli",
    url: "aenamartinelli.com.br"
  }],
  category: "Criação de propostas comerciais e briefings web totalmente online e gratuito!",
  creator: "Aenã Martinelli"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon512.svg" type="image/svg" sizes="512x512"/>
        <link rel="icon" href="/favicon192.svg" type="image/svg"/>
        <link rel="icon" href="/favicon32.svg" type="image/svg" sizes="32x32"/>
        <link rel="icon" href="/favicon64.svg" type="image/svg" sizes="64x64"/>
        <link rel="icon" href="/favicon128.svg" type="image/svg" sizes="128x128"/>
        <link rel="icon" href="/favicon16.svg" type="image/svg" sizes="16x16"/>
      </head>
      <body className={poppins.className}>
        <ImportBsJS />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
