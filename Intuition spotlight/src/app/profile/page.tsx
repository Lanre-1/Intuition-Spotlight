import { Header } from '@/components/header'
import { ProfileHeader } from '@/components/profile-header'
import { ProfileStats } from '@/components/profile-stats'
import { RecentContributions } from '@/components/recent-contributions'
import { BadgesSection } from '@/components/badges-section'
import { WalletInfo } from '@/components/wallet-info'
import { ProfileSettings } from '@/components/profile-settings'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProfileHeader />
        <ProfileStats />
        <RecentContributions />
        <BadgesSection />
        <WalletInfo />
        <ProfileSettings />
      </main>
    </div>
  )
}
