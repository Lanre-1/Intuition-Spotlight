import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Web3Provider } from '@/components/web3-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intuition - Community Platform',
  description: 'A decentralized platform for submitting, curating, and featuring contributions as verifiable claims of trust',
  keywords: ['web3', 'nft', 'community', 'trust', 'blockchain', 'ethereum', 'polygon', 'ipfs', 'intuition'],
  authors: [{ name: 'Intuition Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Web3Provider>
            {children}
          </Web3Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
