import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, GraduationCap, Users, Briefcase, Target, Lightbulb, Rocket } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-8 bg-black-foreground">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-4 pt-8 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Your Gateway to{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Professional Success
          </span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Connect with industry experts, join learning communities, and discover exciting career opportunities.
        </p>
        <div className="flex gap-4">
          <Link href="/signup">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/communities">
            <Button variant="outline" size="lg">
              Explore Communities
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="transform transition-all duration-300 hover:scale-105">
          <CardContent className="flex flex-col gap-2 p-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Student Communities</h3>
            <p className="text-sm text-muted-foreground">
              Join specialized learning communities led by experienced professors.
            </p>
          </CardContent>
        </Card>
        <Card className="transform transition-all duration-300 hover:scale-105">
          <CardContent className="flex flex-col gap-2 p-6">
            <Users className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Expert Guidance</h3>
            <p className="text-sm text-muted-foreground">
              Learn directly from industry professionals and experienced faculty.
            </p>
          </CardContent>
        </Card>
        <Card className="transform transition-all duration-300 hover:scale-105">
          <CardContent className="flex flex-col gap-2 p-6">
            <Briefcase className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Job Opportunities</h3>
            <p className="text-sm text-muted-foreground">
              Access exclusive job postings from top companies.
            </p>
          </CardContent>
        </Card>
        <Card className="transform transition-all duration-300 hover:scale-105">
          <CardContent className="flex flex-col gap-2 p-6">
            <Target className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Skill Development</h3>
            <p className="text-sm text-muted-foreground">
              Focus on in-demand skills that matter to employers.
            </p>
          </CardContent>
        </Card>
        <Card className="transform transition-all duration-300 hover:scale-105">
          <CardContent className="flex flex-col gap-2 p-6">
            <Lightbulb className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Interactive Learning</h3>
            <p className="text-sm text-muted-foreground">
              Engage in discussions and collaborative projects.
            </p>
          </CardContent>
        </Card>
        <Card className="transform transition-all duration-300 hover:scale-105">
          <CardContent className="flex flex-col gap-2 p-6">
            <Rocket className="h-6 w-6 text-primary" />
            <h3 className="font-semibold">Career Growth</h3>
            <p className="text-sm text-muted-foreground">
              Track your progress and achieve your career goals.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-xl bg-muted p-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-center text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-center text-sm text-muted-foreground">Expert Professors</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold">30+</div>
              <div className="text-center text-sm text-muted-foreground">Learning Communities</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold">100+</div>
              <div className="text-center text-sm text-muted-foreground">Job Opportunities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

