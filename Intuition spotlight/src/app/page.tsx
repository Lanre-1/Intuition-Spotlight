import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { FeaturedContributions } from '@/components/featured-contributions'
import { CommunityImpact } from '@/components/community-impact'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <FeaturedContributions />
        <CommunityImpact />
      </main>
    </div>
  )
}
