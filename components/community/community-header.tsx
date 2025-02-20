import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, MessageSquare, BookOpen } from 'lucide-react'

interface CommunityHeaderProps {
  name: string
  description: string
  memberCount: number
  professor: string
  tags: string[]
}

export function CommunityHeader({
  name,
  description,
  memberCount,
  professor,
  tags,
}: CommunityHeaderProps) {
  return (
    <div className="space-y-4 pb-4 border-b">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
          <p className="text-muted-foreground">Created by Prof. {professor}</p>
        </div>
        <Button>Join Community</Button>
      </div>
      <p className="text-muted-foreground max-w-3xl">{description}</p>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span className="text-sm text-muted-foreground">{memberCount} members</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          <span className="text-sm text-muted-foreground">15 discussions</span>
        </div>
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          <span className="text-sm text-muted-foreground">8 resources</span>
        </div>
      </div>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}

