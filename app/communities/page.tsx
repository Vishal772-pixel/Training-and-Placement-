'use client'

import { CommunityCard } from '@/components/community-card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

// This would typically come from your backend
const SAMPLE_COMMUNITIES = [
  {
    id: '1',
    name: 'Web Development',
    description: 'Learn modern web development with React, Next.js, and more.',
    memberCount: 150,
    professor: 'Smith',
    tags: ['React', 'Next.js', 'JavaScript'],
    slug: 'web-development'
  },
  {
    id: '2',
    name: 'Machine Learning',
    description: 'Explore ML concepts, algorithms, and practical applications.',
    memberCount: 120,
    professor: 'Johnson',
    tags: ['Python', 'TensorFlow', 'AI'],
    slug: 'machine-learning'
  },
  {
    id: '3',
    name: 'Data Structures',
    description: 'Master fundamental data structures and algorithms.',
    memberCount: 200,
    professor: 'Davis',
    tags: ['Algorithms', 'Java', 'C++'],
    slug: 'data-structures'
  },
]

export default function CommunitiesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCommunities = SAMPLE_COMMUNITIES.filter(community =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Learning Communities</h1>
        <p className="text-muted-foreground">Join communities to learn and grow together</p>
      </div>

      <div className="flex items-center space-x-2">
        <Input
          placeholder="Search communities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCommunities.map((community) => (
          <CommunityCard key={community.id} {...community} />
        ))}
      </div>
    </div>
  )
}

