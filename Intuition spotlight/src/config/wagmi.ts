import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { polygon, polygonMumbai, mainnet, sepolia } from 'wagmi/chains'

export const chains = [
  polygon,
  polygonMumbai,
  mainnet,
  sepolia,
]

export const config = getDefaultConfig({
  appName: 'Intuition Platform',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'your-project-id',
  chains,
  ssr: true,
})
