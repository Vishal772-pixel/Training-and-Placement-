'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import { MessageSquare, Users, Briefcase, BookOpen } from 'lucide-react'

export default function StudentDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
        <p className="text-muted-foreground">Access your communities and opportunities</p>
      </div>
      
      <Tabs defaultValue="communities" className="space-y-4">
        <TabsList>
          <TabsTrigger value="communities">Communities</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
        </TabsList>

        <TabsContent value="communities" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Web Development
                </CardTitle>
                <CardDescription>15 members • Prof. Smith</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Node.js</Badge>
                  </div>
                  <Button className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Join Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Machine Learning
                </CardTitle>
                <CardDescription>28 members • Prof. Johnson</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Badge>Python</Badge>
                    <Badge>TensorFlow</Badge>
                    <Badge>AI</Badge>
                  </div>
                  <Button className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Join Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="opportunities" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Frontend Developer
                </CardTitle>
                <CardDescription>TechCorp • Remote</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Badge>React</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>UI/UX</Badge>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="transform transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Data Scientist
                </CardTitle>
                <CardDescription>DataCo • Hybrid</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Badge>Python</Badge>
                    <Badge>ML</Badge>
                    <Badge>Statistics</Badge>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="learning" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Your activity overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Communities Joined</span>
                      <span className="text-2xl font-bold">5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Discussions</span>
                      <span className="text-2xl font-bold">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Resources Accessed</span>
                      <span className="text-2xl font-bold">25</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

