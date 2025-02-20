import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">For Students</h3>
            <Link href="/communities" className="text-sm text-muted-foreground hover:text-primary">
              Communities
            </Link>
            <Link href="/jobs" className="text-sm text-muted-foreground hover:text-primary">
              Job Board
            </Link>
            <Link href="/resources" className="text-sm text-muted-foreground hover:text-primary">
              Resources
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">For Professors</h3>
            <Link href="/create-community" className="text-sm text-muted-foreground hover:text-primary">
              Create Community
            </Link>
            <Link href="/manage-resources" className="text-sm text-muted-foreground hover:text-primary">
              Manage Resources
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">For HR</h3>
            <Link href="/post-job" className="text-sm text-muted-foreground hover:text-primary">
              Post a Job
            </Link>
            <Link href="/talent-pool" className="text-sm text-muted-foreground hover:text-primary">
              Talent Pool
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Support</h3>
            <Link href="/help" className="text-sm text-muted-foreground hover:text-primary">
              Help Center
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
              Contact Us
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Legal</h3>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} T&P Portal. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              <Link href="https://twitter.com">Twitter</Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Link href="https://linkedin.com">LinkedIn</Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Link href="https://github.com">GitHub</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

