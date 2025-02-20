import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Briefcase, GraduationCap, Target } from 'lucide-react'

export default function StatsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Portal Statistics</h1>
        <p className="text-muted-foreground">Overview of platform engagement and success</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,500</div>
            <p className="text-xs text-muted-foreground">+20% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Communities</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35</div>
            <p className="text-xs text-muted-foreground">+5 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Placements</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">150</div>
            <p className="text-xs text-muted-foreground">+12% from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">+2% from last year</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Communities</CardTitle>
            <CardDescription>Most active learning communities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Web Development', members: 250, growth: '+15%' },
                { name: 'Machine Learning', members: 180, growth: '+12%' },
                { name: 'Data Structures', members: 150, growth: '+8%' },
                { name: 'Cloud Computing', members: 120, growth: '+10%' },
              ].map((community) => (
                <div key={community.name} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{community.name}</div>
                    <div className="text-sm text-muted-foreground">{community.members} members</div>
                  </div>
                  <div className="text-green-500">{community.growth}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Placement Statistics</CardTitle>
            <CardDescription>Job placement by industry</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { industry: 'Software Development', placements: 45, growth: '+20%' },
                { industry: 'Data Science', placements: 35, growth: '+15%' },
                { industry: 'Cloud Engineering', placements: 30, growth: '+18%' },
                { industry: 'Product Management', placements: 25, growth: '+10%' },
              ].map((stat) => (
                <div key={stat.industry} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{stat.industry}</div>
                    <div className="text-sm text-muted-foreground">{stat.placements} placements</div>
                  </div>
                  <div className="text-green-500">{stat.growth}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

