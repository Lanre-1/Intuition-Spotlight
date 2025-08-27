"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Users, Award, Globe } from 'lucide-react'

const metrics = [
  {
    title: "Total Contributions",
    value: "1,234",
    change: "+12%",
    icon: TrendingUp,
    description: "From last month"
  },
  {
    title: "Active Contributors",
    value: "567",
    change: "+8%",
    icon: Users,
    description: "From last month"
  },
  {
    title: "Trust Score",
    value: "89%",
    change: "+3%",
    icon: Award,
    description: "From last month"
  },
  {
    title: "Global Reach",
    value: "42",
    change: "+5",
    icon: Globe,
    description: "Countries"
  }
]

export function CommunityImpact() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground">Community Impact</h2>
        <p className="text-lg text-muted-foreground">
          See how our community is growing and making an impact
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="text-center">
            <CardHeader className="pb-2">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="flex items-center justify-center gap-1 text-sm text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span>{metric.change}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
