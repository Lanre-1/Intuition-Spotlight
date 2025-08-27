"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Post {
  id: number
  title: string
  author: string
  description: string
  contentType: string
  tags: string[]
  votes: { up: number; down: number }
  likes: number
  comments: number
  timestamp: string
  image: string
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "The Future of Privacy in Machine Learning",
    author: "0x1234...5678",
    description: "Exploring fully homomorphic encryption applications in machine learning pipelines. This research demonstrates novel approaches to training models on encrypted data while maintaining privacy guarantees.",
    contentType: "research",
    tags: ["FHE", "Privacy", "ML", "Cryptography"],
    votes: { up: 42, down: 3 },
    likes: 28,
    comments: 12,
    timestamp: "2 days ago",
    image: "📊"
  },
  {
    id: 2,
    title: "Decentralized Identity Meme Collection",
    author: "0x9876...4321",
    description: "A humorous take on self-sovereign identity through digital art. Exploring the absurdity and promise of owning your digital identity in the Web3 era.",
    contentType: "memes",
    tags: ["Identity", "Web3", "Art", "Memes"],
    votes: { up: 128, down: 7 },
    likes: 89,
    comments: 34,
    timestamp: "1 week ago",
    image: "🤣"
  },
  {
    id: 3,
    title: "Web3 UX Patterns Video Series",
    author: "0x5555...7777",
    description: "Educational content breaking down ZK proofs for beginners. Clear visual explanations make complex concepts accessible to everyone interested in blockchain technology.",
    contentType: "video",
    tags: ["ZK", "Education", "Crypto", "UX"],
    votes: { up: 89, down: 2 },
    likes: 67,
    comments: 23,
    timestamp: "2 weeks ago",
    image: "🎥"
  },
  {
    id: 4,
    title: "The Future of DAOs",
    author: "0x5555...9999",
    description: "An in-depth analysis of decentralized governance models and their potential to reshape organizational structures in the digital age.",
    contentType: "article",
    tags: ["DAO", "Governance", "Web3", "Politics"],
    votes: { up: 56, down: 8 },
    likes: 45,
    comments: 18,
    timestamp: "3 weeks ago",
    image: "📝"
  },
  {
    id: 5,
    title: "Zero-Knowledge Art Gallery",
    author: "0xaaaa...bbbb",
    description: "A collection of generative art pieces that explore the concept of zero-knowledge proofs through visual representation. Each piece is unique and verifiable on-chain.",
    contentType: "art",
    tags: ["Art", "ZK", "Generative", "NFT"],
    votes: { up: 156, down: 12 },
    likes: 134,
    comments: 67,
    timestamp: "1 month ago",
    image: "🎨"
  },
  {
    id: 6,
    title: "DeFi Meme Economics",
    author: "0xcccc...dddd",
    description: "Understanding the economics behind meme coins and their impact on decentralized finance. A comprehensive analysis of the meme economy phenomenon.",
    contentType: "memes",
    tags: ["DeFi", "Memes", "Economics", "Crypto"],
    votes: { up: 234, down: 15 },
    likes: 189,
    comments: 89,
    timestamp: "1 month ago",
    image: "🚀"
  }
]

export function GalleryGrid() {
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(mockPosts)
  const [expandedComments, setExpandedComments] = useState<number[]>([])

  const toggleLike = (postId: number) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, likes: post.likes + (post.liked ? -1 : 1), liked: !post.liked }
          : post
      )
    )
  }

  const toggleComment = (postId: number) => {
    setExpandedComments(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  const vote = (postId: number, voteType: 'up' | 'down') => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, votes: { ...post.votes, [voteType]: post.votes[voteType] + 1 } }
          : post
      )
    )
  }

  const addComment = (postId: number, commentText: string) => {
    if (commentText.trim()) {
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === postId 
            ? { ...post, comments: post.comments + 1 }
            : post
        )
      )
      // In a real app, you would send this to your backend
      alert('Comment added successfully!')
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
      // Fallback for browsers that don't support Web Share API
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post?.title || '')}&url=${encodeURIComponent(window.location.href)}`
      window.open(url, '_blank')
    }
  }

  const applyFilters = (filters: any) => {
    let filtered = [...posts]

    if (filters.contentType) {
      filtered = filtered.filter(p => p.contentType === filters.contentType)
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
    }

    // Sort posts
    switch (filters.sortBy) {
      case 'recent':
        filtered.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        break
      case 'popular':
        filtered.sort((a, b) => b.likes - a.likes)
        break
      case 'votes':
        filtered.sort((a, b) => (b.votes.up - b.votes.down) - (a.votes.up - a.votes.down))
        break
      case 'comments':
        filtered.sort((a, b) => b.comments - a.comments)
        break
    }

    setFilteredPosts(filtered)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-6xl text-white relative">
            <Badge className="absolute top-4 left-4">
              {post.contentType.charAt(0).toUpperCase() + post.contentType.slice(1)}
            </Badge>
            <span>{post.image}</span>
          </div>
          
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 font-mono">
              by {post.author} • {post.timestamp}
            </p>
            <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex justify-between items-center border-t pt-4">
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleLike(post.id)}
                  className="flex items-center gap-1"
                >
                  ❤️ {post.likes}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleComment(post.id)}
                  className="flex items-center gap-1"
                >
                  💬 {post.comments}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => vote(post.id, 'up')}
                  className="flex items-center gap-1"
                >
                  👍 {post.votes.up}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => vote(post.id, 'down')}
                  className="flex items-center gap-1"
                >
                  👎 {post.votes.down}
                </Button>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => sharePost(post.id)}
              >
                📤
              </Button>
            </div>
            
            {expandedComments.includes(post.id) && (
              <div className="mt-4 pt-4 border-t">
                <Input
                  placeholder="Write a comment..."
                  className="mb-2"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addComment(post.id, e.currentTarget.value)
                      e.currentTarget.value = ''
                    }
                  }}
                />
                <div className="text-sm text-muted-foreground">
                  Press Enter to post comment
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
