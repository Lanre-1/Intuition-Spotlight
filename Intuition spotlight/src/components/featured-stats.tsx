"use client"

const stats = [
  { value: "156", label: "Featured Posts" },
  { value: "89%", label: "Approval Rate" },
  { value: "2.4K", label: "Total Votes" },
  { value: "47", label: "Curators" },
]

export function FeaturedStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card border rounded-xl p-6 text-center hover:-translate-y-1 transition-transform duration-200"
        >
          <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
          <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
