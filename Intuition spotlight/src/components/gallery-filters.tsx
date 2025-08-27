"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface FiltersProps {
  onFiltersChange: (filters: any) => void
}

export function GalleryFilters({ onFiltersChange }: FiltersProps) {
  const [filters, setFilters] = useState({
    contentType: '',
    sortBy: 'recent',
    search: ''
  })

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const handleApplyFilters = () => {
    onFiltersChange(filters)
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Content Type</label>
            <select
              value={filters.contentType}
              onChange={(e) => handleFilterChange('contentType', e.target.value)}
              className="p-2 border rounded-md bg-background"
            >
              <option value="">All Types</option>
              <option value="research">Research</option>
              <option value="article">Article</option>
              <option value="video">Video</option>
              <option value="art">Art</option>
              <option value="memes">Memes</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="p-2 border rounded-md bg-background"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="votes">Most Voted</option>
              <option value="comments">Most Commented</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Search</label>
            <Input
              type="text"
              placeholder="Search contributions..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-64"
            />
          </div>
          
          <Button onClick={handleApplyFilters}>
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
