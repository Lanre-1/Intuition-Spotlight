"use client"

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Network, TrendingUp } from 'lucide-react'

const trendingTopics = [
  {
    name: "Machine Learning",
    connections: 45,
    contributions: 123,
    growth: "+15%"
  },
  {
    name: "Web3 UX",
    connections: 32,
    contributions: 89,
    growth: "+22%"
  },
  {
    name: "Digital Identity",
    connections: 28,
    contributions: 67,
    growth: "+8%"
  },
  {
    name: "Privacy Tech",
    connections: 41,
    contributions: 156,
    growth: "+18%"
  }
]

export function KnowledgeGraphPreview() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground">Knowledge Graph</h2>
        <p className="text-lg text-muted-foreground">
          Explore interconnected knowledge objects and discover relationships
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Graph Preview */}
        <Card className="relative overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5" />
              Interactive Graph
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-64 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Network className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Interactive knowledge graph visualization
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>1,234 knowledge objects</span>
              <span>5,678 connections</span>
            </div>
          </CardContent>
        </Card>

        {/* Trending Topics */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Trending Topics</h3>
            <Button variant="outline" size="sm" asChild>
              <Link href="/knowledge-graph">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="space-y-3">
            {trendingTopics.map((topic) => (
              <Card key={topic.name} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">{topic.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{topic.connections} connections</span>
                        <span>{topic.contributions} contributions</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-green-600 bg-green-100">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        {topic.growth}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
