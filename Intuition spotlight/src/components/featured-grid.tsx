"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface FeaturedPost {
  id: number
  title: string
  author: string
  description: string
  contentType: string
  tags: string[]
  votes: number
  quality: number
  impact: string
  timestamp: string
  curator: string
  approvalDate: string
}

const mockFeaturedPosts: FeaturedPost[] = [
  {
    id: 1,
    title: "The Future of Privacy in Machine Learning",
    author: "0x1234...5678",
    description: "A comprehensive analysis of fully homomorphic encryption applications in machine learning pipelines, demonstrating novel approaches to training models on encrypted data while maintaining privacy guarantees.",
    contentType: "research",
    tags: ["FHE", "Privacy", "ML", "Cryptography"],
    votes: 156,
    quality: 9.2,
    impact: "High",
    timestamp: "2 days ago",
    curator: "Dr. Sarah Chen",
    approvalDate: "2024-01-15"
  },
  {
    id: 2,
    title: "Web3 UX Patterns Analysis",
    author: "0xabcd...efgh",
    description: "An in-depth study of user experience patterns in Web3 applications, identifying best practices and common pitfalls for developers building decentralized applications.",
    contentType: "article",
    tags: ["Web3", "UX", "Design", "DApps"],
    votes: 89,
    quality: 8.7,
    impact: "Medium",
    timestamp: "1 week ago",
    curator: "Alex Rodriguez",
    approvalDate: "2024-01-10"
  },
  {
    id: 3,
    title: "Zero-Knowledge Proofs Explained",
    author: "0x9876...5432",
    description: "An educational video series breaking down complex cryptographic concepts into digestible explanations, perfect for developers new to privacy-preserving technologies.",
    contentType: "video",
    tags: ["ZKP", "Education", "Cryptography", "Privacy"],
    votes: 234,
    quality: 9.5,
    impact: "High",
    timestamp: "2 weeks ago",
    curator: "Prof. Michael Kim",
    approvalDate: "2024-01-05"
  },
  {
    id: 4,
    title: "Decentralized Identity Art Collection",
    author: "0x5678...1234",
    description: "A unique art collection exploring the intersection of digital identity and blockchain technology, featuring generative art pieces that represent different aspects of self-sovereign identity.",
    contentType: "art",
    tags: ["Digital Art", "Identity", "NFTs", "Blockchain"],
    votes: 67,
    quality: 8.9,
    impact: "Medium",
    timestamp: "3 weeks ago",
    curator: "Elena Martinez",
    approvalDate: "2023-12-28"
  },
  {
    id: 5,
    title: "DeFi Meme Collection",
    author: "0xfedc...ba98",
    description: "A collection of educational memes that make complex DeFi concepts accessible and entertaining, helping newcomers understand the world of decentralized finance.",
    contentType: "memes",
    tags: ["DeFi", "Memes", "Education", "Finance"],
    votes: 123,
    quality: 8.3,
    impact: "Medium",
    timestamp: "1 month ago",
    curator: "David Thompson",
    approvalDate: "2023-12-20"
  },
  {
    id: 6,
    title: "Cross-Chain Interoperability Research",
    author: "0x1111...2222",
    description: "Research paper exploring novel approaches to cross-chain communication and asset transfers, with implications for the future of multi-chain DeFi ecosystems.",
    contentType: "research",
    tags: ["Cross-Chain", "Interoperability", "DeFi", "Research"],
    votes: 189,
    quality: 9.1,
    impact: "High",
    timestamp: "1 month ago",
    curator: "Dr. James Wilson",
    approvalDate: "2023-12-15"
  }
]

export function FeaturedGrid() {
  const [posts, setPosts] = useState<FeaturedPost[]>(mockFeaturedPosts)
  const [filteredPosts, setFilteredPosts] = useState<FeaturedPost[]>(mockFeaturedPosts)

  const applyFilters = (filters: any) => {
    let filtered = [...posts]

    // Content type filter
    if (filters.contentType) {
      filtered = filtered.filter(post => post.contentType === filters.contentType)
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchLower) ||
        post.description.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        post.curator.toLowerCase().includes(searchLower)
      )
    }

    // Time filter
    if (filters.timeFilter !== 'all') {
      const now = new Date()
      const cutoff = new Date()
      
      switch (filters.timeFilter) {
        case 'week':
          cutoff.setDate(now.getDate() - 7)
          break
        case 'month':
          cutoff.setMonth(now.getMonth() - 1)
          break
        case 'quarter':
          cutoff.setMonth(now.getMonth() - 3)
          break
      }
      
      filtered = filtered.filter(post => new Date(post.approvalDate) >= cutoff)
    }

    // Sort
    switch (filters.sortBy) {
      case 'recent':
        filtered.sort((a, b) => new Date(b.approvalDate).getTime() - new Date(a.approvalDate).getTime())
        break
      case 'votes':
        filtered.sort((a, b) => b.votes - a.votes)
        break
      case 'quality':
        filtered.sort((a, b) => b.quality - a.quality)
        break
      case 'impact':
        const impactOrder = { 'High': 3, 'Medium': 2, 'Low': 1 }
        filtered.sort((a, b) => impactOrder[b.impact as keyof typeof impactOrder] - impactOrder[a.impact as keyof typeof impactOrder])
        break
    }

    setFilteredPosts(filtered)
  }

  const viewPost = (postId: number) => {
    const post = posts.find(p => p.id === postId)
    if (post) {
      alert(`Viewing: ${post.title}\n\nThis would navigate to the full post view.`)
    }
  }

  const sharePost = (postId: number) => {
    const post = posts.find(p => p.id === postId)
    if (post && navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href
      })
    } else {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post?.title || '')}&url=${encodeURIComponent(window.location.href)}`
      window.open(url, '_blank')
    }
  }

  const votePost = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, votes: post.votes + 1 }
          : post
      )
    )
    setFilteredPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, votes: post.votes + 1 }
          : post
      )
    )
    alert(`Vote recorded for: ${posts.find(p => p.id === postId)?.title}`)
  }

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4 opacity-50">🎯</div>
        <h3 className="text-2xl font-semibold mb-2">No Featured Content Found</h3>
        <p className="text-muted-foreground mb-6">
          Try adjusting your filters or check back later for new featured content.
        </p>
        <Button onClick={() => setFilteredPosts(posts)}>
          Show All Content
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl text-white relative">
            <Badge className="absolute top-4 right-4 bg-white/20 text-white border-0 backdrop-blur-sm">
              {post.contentType.charAt(0).toUpperCase() + post.contentType.slice(1)}
            </Badge>
            <span>📊</span>
          </div>

          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 font-mono">
              by {post.author} • {post.timestamp} • Curated by {post.curator}
            </p>
            <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between items-center border-t pt-4 mb-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>👍</span>
                <span>{post.votes} votes</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>⭐</span>
                <span>{post.quality}/10</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>🎯</span>
                <span>{post.impact} Impact</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={() => viewPost(post.id)}
                className="flex-1"
              >
                View Full Post
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => sharePost(post.id)}
              >
                Share
              </Button>
              <Button 
                size="sm" 
                variant="secondary" 
                onClick={() => votePost(post.id)}
              >
                Vote
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
