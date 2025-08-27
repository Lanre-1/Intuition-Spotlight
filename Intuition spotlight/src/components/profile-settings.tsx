"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ProfileSettings() {
  const [formData, setFormData] = useState({
    displayName: "Alex Chen",
    bio: "Web3 developer and researcher passionate about privacy-preserving technologies. Contributing to the future of decentralized knowledge curation.",
    email: "alex@example.com",
    website: "https://alexchen.dev",
    expertise: ["privacy", "machine-learning"]
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Profile updated successfully!')
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all changes?')) {
      setFormData({
        displayName: "Alex Chen",
        bio: "Web3 developer and researcher passionate about privacy-preserving technologies. Contributing to the future of decentralized knowledge curation.",
        email: "alex@example.com",
        website: "https://alexchen.dev",
        expertise: ["privacy", "machine-learning"]
      })
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          ⚙️ Profile Settings
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="font-medium">Display Name</label>
            <Input
              value={formData.displayName}
              onChange={(e) => setFormData({...formData, displayName: e.target.value})}
              placeholder="Enter your display name"
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-medium">Bio</label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              placeholder="Tell us about yourself"
              className="w-full min-h-[100px] p-3 border rounded-md bg-background resize-vertical"
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-medium">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-medium">Website</label>
            <Input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({...formData, website: e.target.value})}
              placeholder="Enter your website URL"
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-medium">Expertise Areas</label>
            <select
              multiple
              value={formData.expertise}
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions, option => option.value)
                setFormData({...formData, expertise: selected})
              }}
              className="w-full p-3 border rounded-md bg-background"
            >
              <option value="privacy">Privacy Technologies</option>
              <option value="machine-learning">Machine Learning</option>
              <option value="cryptography">Cryptography</option>
              <option value="web3">Web3 Development</option>
              <option value="defi">DeFi</option>
            </select>
          </div>
          
          <div className="flex gap-4">
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Save Changes
            </Button>
            <Button type="button" variant="outline" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
