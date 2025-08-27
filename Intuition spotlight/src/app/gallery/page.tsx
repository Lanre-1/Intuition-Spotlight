import { Header } from '@/components/header'
import { GalleryHeader } from '@/components/gallery-header'
import { GalleryFilters } from '@/components/gallery-filters'
import { GalleryGrid } from '@/components/gallery-grid'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <GalleryHeader />
        <GalleryFilters />
        <GalleryGrid />
      </main>
    </div>
  )
}
