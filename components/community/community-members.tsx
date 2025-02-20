import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Crown, MessageSquare } from 'lucide-react'

export function CommunityMembers() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Members</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: 'Prof. Smith',
            role: 'Professor',
            avatar: '/placeholder.svg',
            isAdmin: true,
          },
          {
            name: 'John Doe',
            role: 'Student',
            avatar: '/placeholder.svg',
            posts: 15,
          },
          {
            name: 'Jane Smith',
            role: 'Student',
            avatar: '/placeholder.svg',
            posts: 8,
          },
        ].map((member) => (
          <Card key={member.name} className="transform transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="flex items-center gap-2">
                  {member.name}
                  {member.isAdmin && <Crown className="h-4 w-4 text-yellow-500" />}
                </CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </div>
            </CardHeader>
            {!member.isAdmin && (
              <CardContent>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  <span>{member.posts} posts</span>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}

