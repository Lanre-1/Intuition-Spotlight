"use client"

export function FeaturedHeader() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Featured Content
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Discover the best community contributions that have been approved and featured by our curators
      </p>
    </div>
  )
}
