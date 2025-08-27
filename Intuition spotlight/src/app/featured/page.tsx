import { Header } from '@/components/header'
import { FeaturedHeader } from '@/components/featured-header'
import { FeaturedStats } from '@/components/featured-stats'
import { FeaturedFilters } from '@/components/featured-filters'
import { FeaturedGrid } from '@/components/featured-grid'

export default function FeaturedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <FeaturedHeader />
        <FeaturedStats />
        <FeaturedFilters />
        <FeaturedGrid />
      </main>
    </div>
  )
}
