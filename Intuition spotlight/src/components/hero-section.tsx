"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Users, TrendingUp } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="py-20 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Build Trust Through
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              {" "}Community Contributions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Submit, curate, and discover knowledge as verifiable claims. Every contribution becomes an NFT, 
            every vote builds our cultural trust record.
          </p>
        </div>

        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="group">
            <Link href="/submit">
              Submit Contribution
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
                     <Button variant="outline" size="lg" asChild>
             <Link href="/profile">
               View Profile
               <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
           </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">1,234+</h3>
            <p className="text-sm text-muted-foreground">Contributions</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">567+</h3>
            <p className="text-sm text-muted-foreground">Contributors</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">89%</h3>
            <p className="text-sm text-muted-foreground">Approval Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
