import type { Metadata, Viewport } from 'next'
import './styles.css'

export const metadata: Metadata = { title: 'TV360 Vietnam', description: 'Vietnamese live television channels' }
export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>
}
