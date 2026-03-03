import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Ricardo Coronado | Ginecología, Obstetricia y Colposcopía en Saltillo',
  description:
    'Especialista en ginecología, obstetricia y colposcopía. Escucha, calidad y atención en un ambiente seguro y de confianza. Centro Médico Muguerza, Saltillo, Coah.',
  keywords: ['ginecólogo', 'obstetricia', 'colposcopía', 'Saltillo', 'Dr. Ricardo Coronado', 'Muguerza'],
  openGraph: {
    title: 'Dr. Ricardo Coronado | Ginecología, Obstetricia y Colposcopía',
    description: 'Escucha, calidad y atención en un ambiente seguro y de confianza.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#253534',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
