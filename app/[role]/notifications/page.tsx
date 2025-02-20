'use client'

import { DashboardLayout } from '@/components/layouts/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bell, Mail, MessageSquare, Briefcase } from 'lucide-react'
import { cn } from '@/lib/utils'

const notifications = [
  {
    id: 1,
    title: 'New Community Post',
    message: 'Prof. Smith posted in Web Development community',
    type: 'community',
    time: '5 minutes ago',
    read: false,
  },
  {
    id: 2,
    title: 'Job Application Update',
    message: 'Your application for Frontend Developer has been reviewed',
    type: 'job',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 3,
    title: 'New Message',
    message: 'You have a new message from Jane Doe',
    type: 'message',
    time: '2 hours ago',
    read: true,
  },
]

export default function NotificationsPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'community':
        return MessageSquare
      case 'job':
        return Briefcase
      case 'message':
        return Mail
      default:
        return Bell
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
          <p className="text-muted-foreground">
            Stay updated with your latest activities
          </p>
        </div>

        <div className="grid gap-4">
          {notifications.map((notification) => {
            const Icon = getIcon(notification.type)
            return (
              <Card
                key={notification.id}
                className={cn(
                  'transform transition-all duration-300 hover:scale-[1.02]',
                  !notification.read && 'border-primary bg-primary/5'
                )}
              >
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className={cn(
                    'rounded-full p-2',
                    !notification.read ? 'bg-primary/10' : 'bg-muted'
                  )}>
                    <Icon className={cn(
                      'h-4 w-4',
                      !notification.read ? 'text-primary' : 'text-muted-foreground'
                    )} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">
                      {notification.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {notification.message}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                    {!notification.read && (
                      <Badge variant="default" className="bg-primary">New</Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}

