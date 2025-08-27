"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const contributions = [
  {
    id: 1,
    title: "The Future of Privacy in Machine Learning",
    meta: "Research • 2 days ago • 42 votes",
    status: "approved"
  },
  {
    id: 2,
    title: "Web3 UX Patterns Analysis",
    meta: "Article • 1 week ago • 28 votes",
    status: "pending"
  },
  {
    id: 3,
    title: "Zero-Knowledge Proofs Explained",
    meta: "Video • 2 weeks ago • 67 votes",
    status: "approved"
  }
]

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'approved':
      return 'default'
    case 'pending':
      return 'secondary'
    case 'rejected':
      return 'destructive'
    default:
      return 'outline'
  }
}

const getStatusText = (status: string) => {
  return status.charAt(0).toUpperCase() + status.slice(1)
}

export function RecentContributions() {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          📝 Recent Contributions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((contribution) => (
            <div
              key={contribution.id}
              className="bg-background border rounded-lg p-6 hover:border-primary hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="font-semibold mb-2">{contribution.title}</h3>
              <div className="text-sm text-muted-foreground mb-4">{contribution.meta}</div>
              <Badge variant={getStatusVariant(contribution.status)}>
                {getStatusText(contribution.status)}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
