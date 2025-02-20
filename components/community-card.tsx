import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, MessageSquare } from 'lucide-react'
import Link from 'next/link'

interface CommunityCardProps {
  id: string
  name: string
  description: string
  memberCount: number
  professor: string
  tags: string[]
  slug: string
}

export function CommunityCard({
  id,
  name,
  description,
  memberCount,
  professor,
  tags,
  slug,
}: CommunityCardProps) {
  return (
    <Card className="transform transition-all duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          {name}
        </CardTitle>
        <CardDescription>{memberCount} members • Prof. {professor}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Link href={`/communities/${slug}`} className="flex-1">
              <Button className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Join Discussion
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

