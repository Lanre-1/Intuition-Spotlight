"use client"

import { Card, CardContent } from '@/components/ui/card'

const badges = [
  {
    icon: "⭐",
    name: "First Contribution",
    description: "Made your first contribution to the platform"
  },
  {
    icon: "🔥",
    name: "Trending Creator",
    description: "Had a contribution reach trending status"
  },
  {
    icon: "🎯",
    name: "Quality Curator",
    description: "Curated 50+ contributions with high accuracy"
  },
  {
    icon: "🚀",
    name: "Early Adopter",
    description: "Joined the platform in its first month"
  }
]

export function BadgesSection() {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          🏆 Badges & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-background border rounded-lg p-4 text-center hover:border-primary hover:scale-105 transition-all duration-200"
            >
              <div className="text-4xl mb-2">{badge.icon}</div>
              <div className="font-semibold mb-1">{badge.name}</div>
              <div className="text-xs text-muted-foreground">{badge.description}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
