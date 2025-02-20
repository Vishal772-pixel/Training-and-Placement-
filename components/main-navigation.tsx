'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, UserCircle, Plus } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'

export default function MainNavigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  
  const isActive = (path: string) => pathname === path

  const getNavLinks = () => {
    const links = [
      { href: '/communities', label: 'Communities' },
      { href: '/stats', label: 'Stats' },
    ]

    if (user?.role === 'student') {
      links.push(
        { href: '/student/dashboard', label: 'Dashboard' },
        { href: '/student/profile', label: 'Profile' }
      )
    }

    if (user?.role === 'professor') {
      links.push(
        { href: '/professor/dashboard', label: 'Dashboard' },
        { href: '/professor/profile', label: 'Profile' }
      )
    }

    if (user?.role === 'hr') {
      links.push(
        { href: '/hr/dashboard', label: 'Dashboard' },
        { href: '/hr/profile', label: 'Profile' }
      )
    }

    return links
  }

  const navLinks = getNavLinks()
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">T&P Portal</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Role-specific Actions */}
        {user && (
          <div className="ml-auto mr-4">
            {user.role === 'hr' && (
              <Link href="/hr/post-job">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Post Job
                </Button>
              </Link>
            )}
            {user.role === 'professor' && (
              <Link href="/professor/create-community">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Community
                </Button>
              </Link>
            )}
          </div>
        )}

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* User Menu */}
        <div className="flex items-center">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <UserCircle className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/${user.role}/profile`}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={`/${user.role}/settings`}>Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

