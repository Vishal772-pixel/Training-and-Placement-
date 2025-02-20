'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useAuth } from '@/contexts/auth-context'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, User, BookOpen, MessageSquare, Briefcase, Settings, Bell } from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const { user } = useAuth()

  const getNavItems = () => {
    const items = [
      {
        href: `/${user?.role}/dashboard`,
        label: 'Overview',
        icon: LayoutDashboard,
      },
      {
        href: `/${user?.role}/profile`,
        label: 'Profile',
        icon: User,
      },
      {
        href: '/communities',
        label: 'Communities',
        icon: MessageSquare,
      },
    ]

    if (user?.role === 'student') {
      items.push(
        {
          href: '/student/courses',
          label: 'My Courses',
          icon: BookOpen,
        },
        {
          href: '/student/applications',
          label: 'Job Applications',
          icon: Briefcase,
        }
      )
    }

    if (user?.role === 'professor') {
      items.push({
        href: '/professor/courses',
        label: 'My Courses',
        icon: BookOpen,
      })
    }

    if (user?.role === 'hr') {
      items.push({
        href: '/hr/jobs',
        label: 'Job Listings',
        icon: Briefcase,
      })
    }

    items.push(
      {
        href: `/${user?.role}/notifications`,
        label: 'Notifications',
        icon: Bell,
      },
      {
        href: `/${user?.role}/settings`,
        label: 'Settings',
        icon: Settings,
      }
    )

    return items
  }

  const navItems = getNavItems()

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col border-r bg-muted/40 md:flex">
        <div className="flex h-14 items-center border-b px-4">
          <span className="font-semibold">Dashboard</span>
        </div>
        <div className="flex-1 space-y-1 p-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  'w-full justify-start',
                  pathname === item.href && 'bg-muted'
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="h-14 border-b" />
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

