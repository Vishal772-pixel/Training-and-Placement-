import { CommunityHeader } from '@/components/community/community-header'
import { CommunityTabs } from '@/components/community/community-tabs'

// This would typically come from your database
const SAMPLE_COMMUNITY = {
  name: 'Web Development',
  description: 'Learn modern web development with React, Next.js, and more. Join our community to participate in discussions, access resources, and connect with fellow developers.',
  memberCount: 150,
  professor: 'Smith',
  tags: ['React', 'Next.js', 'JavaScript', 'Web Development'],
}

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <CommunityHeader {...SAMPLE_COMMUNITY} />
      <CommunityTabs />
    </div>
  )
}

