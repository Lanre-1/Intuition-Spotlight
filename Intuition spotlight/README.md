# Intuition Community Platform

A decentralized web3 application where community members submit, curate, and feature contributions as verifiable claims of trust. Every submission becomes an NFT, every vote builds our cultural trust record.

## 🚀 Features

- **Wallet Authentication**: Sign-in with Ethereum (SIWE)
- **NFT Contributions**: Every submission minted as ERC721 NFT
- **Community Curation**: Upvoting and commenting system
- **Recognition Badges**: ERC1155 badges for achievements
- **Decentralized Storage**: IPFS for content and metadata
- **Trust Scoring**: Reputation system based on contributions
- **Governance**: Community voting on features and curation
- **Dark/Light Mode**: Theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with TailwindCSS

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS, Radix UI components
- **Blockchain**: Ethereum/Polygon, Solidity smart contracts
- **Wallet**: RainbowKit, wagmi, ethers.js
- **Storage**: IPFS via Web3.storage
- **Backend**: Supabase or Firebase
- **Deployment**: Vercel, Hardhat

## 📦 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Blockchain Configuration
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
NEXT_PUBLIC_NETWORK=polygon
NEXT_PUBLIC_CHAIN_ID=137
NEXT_PUBLIC_RPC_URL=https://polygon-rpc.com/

# Contract Addresses (filled after deployment)
NEXT_PUBLIC_CONTRIBUTIONS_CONTRACT=
NEXT_PUBLIC_BADGES_CONTRACT=
NEXT_PUBLIC_VOTING_CONTRACT=
NEXT_PUBLIC_FACTORY_CONTRACT=

# IPFS Configuration
NEXT_PUBLIC_WEB3_STORAGE_API_KEY=your_web3_storage_api_key

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Open Application

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── header.tsx        # Main navigation header
│   ├── hero-section.tsx  # Home page hero
│   └── ...               # Other page components
├── config/               # Configuration files
│   └── wagmi.ts         # Web3 configuration
├── lib/                  # Utility libraries
│   └── utils.ts         # Helper functions
└── types/               # TypeScript type definitions

contracts/               # Solidity smart contracts
scripts/                # Deployment scripts
test/                   # Contract tests
public/                 # Static assets
```

## 🎨 Design System

The platform uses a comprehensive design system with:

- **CSS Variables**: For consistent theming (light/dark mode)
- **TailwindCSS**: For utility-first styling
- **Radix UI**: For accessible component primitives
- **Lucide Icons**: For consistent iconography

### Color Palette

```css
/* Light Mode */
--background: #ffffff
--surface: #f8fafc
--foreground: #0f172a
--primary: #8b5cf6
--muted: #64748b

/* Dark Mode */
--background: #0f172a
--surface: #1e293b
--foreground: #f8fafc
--primary: #a855f7
--muted: #94a3b8
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run compile-contracts` - Compile smart contracts
- `npm run deploy-contracts` - Deploy contracts
- `npm run test-contracts` - Test smart contracts

## 🌐 Pages

- **Home** (`/`) - Landing page with hero, featured contributions, and community impact
- **Submit** (`/submit`) - Content submission wizard (to be implemented)
- **Curate** (`/curate`) - Content review and curation dashboard (to be implemented)
- **Gallery** (`/gallery`) - Interactive gallery to view and interact with posts/contributions
- **Featured** (`/featured`) - Showcase of approved and featured community contributions
- **Profile** (`/profile`) - User profile with stats, contributions, badges, and settings

## 🔗 Smart Contracts

- **IntuitionContributions**: ERC721 for contribution NFTs
- **IntuitionBadges**: ERC1155 for community badges
- **IntuitionVoting**: Governance and curation system
- **IntuitionFactory**: Contract deployment manager

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Discord**: [Intuition Community](https://discord.gg/intuition)
- **Documentation**: [docs.intuition.community](https://docs.intuition.community)
- **Issues**: [GitHub Issues](https://github.com/intuition-dev/platform/issues)

## 🚧 Development Status

- ✅ **Home Page**: Complete with responsive design and dark mode
- 🔄 **Submit Page**: In development
- 🔄 **Curate Page**: In development
- ✅ **Gallery Page**: Complete with interactive post viewing and social features
- ✅ **Featured Page**: Complete with approved content showcase and filtering
- ✅ **Profile Page**: Complete with user stats, contributions, badges, and settings
- 🔄 **Smart Contracts**: In development
- 🔄 **Web3 Integration**: In development

---

Built with ❤️ by the Intuition Team
