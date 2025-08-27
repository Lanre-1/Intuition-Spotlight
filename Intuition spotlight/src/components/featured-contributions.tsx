"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Share2, ThumbsUp, MessageCircle, Eye } from 'lucide-react'

interface Contribution {
  id: number
  title: string
  author: string
  description: string
  contentType: string
  tags: string[]
  votes: number
  comments: number
  views: number
  imageUrl?: string
}

const mockContributions: Contribution[] = [
  {
    id: 1,
    title: "The Future of Privacy in Machine Learning",
    author: "0x1234...5678",
    description: "Exploring fully homomorphic encryption applications in machine learning pipelines. This research demonstrates novel approaches to training models on encrypted data.",
    contentType: "Research",
    tags: ["FHE", "Privacy", "ML"],
    votes: 42,
    comments: 8,
    views: 156
  },
  {
    id: 2,
    title: "Decentralized Identity Meme Collection",
    author: "0x9876...4321",
    description: "A humorous take on self-sovereign identity through digital art. Exploring the absurdity and promise of owning your digital identity.",
    contentType: "Art",
    tags: ["Identity", "Web3", "Art"],
    votes: 128,
    comments: 23,
    views: 342
  },
  {
    id: 3,
    title: "Web3 UX Patterns Video Series",
    author: "0x5555...7777",
    description: "Educational content breaking down ZK proofs for beginners. Clear visual explanations make complex concepts accessible.",
    contentType: "Video",
    tags: ["ZK", "Education", "Crypto"],
    votes: 89,
    comments: 15,
    views: 234
  }
]

export function FeaturedContributions() {
  const [contributions] = useState<Contribution[]>(mockContributions)

  const getContentTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'research': return 'bg-blue-500'
      case 'art': return 'bg-pink-500'
      case 'video': return 'bg-green-500'
      case 'article': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground">Featured Contributions</h2>
        <p className="text-lg text-muted-foreground">
          Discover the most impactful contributions from our community
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contributions.map((contribution) => (
          <Card key={contribution.id} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <Badge 
                  variant="secondary" 
                  className={`${getContentTypeColor(contribution.contentType)} text-white`}
                >
                  {contribution.contentType}
                </Badge>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="mb-2 text-lg font-semibold text-foreground line-clamp-2">
                {contribution.title}
              </h3>
              <p className="mb-3 text-sm text-muted-foreground font-mono">
                by {contribution.author}
              </p>
              <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                {contribution.description}
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {contribution.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{contribution.votes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{contribution.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{contribution.views}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
