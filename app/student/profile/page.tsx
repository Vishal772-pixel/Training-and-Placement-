'use client'

import { DashboardLayout } from '@/components/layouts/dashboard-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/contexts/auth-context'

export default function StudentProfilePage() {
  const { user } = useAuth()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
            <p className="text-muted-foreground">
              Manage your personal information and preferences
            </p>
          </div>
          <Button>Save Changes</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button variant="outline">Change Photo</Button>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="john@example.com" type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input id="studentId" defaultValue="STU123456" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" defaultValue="Computer Science" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="year">Year of Study</Label>
                <Input id="year" defaultValue="3rd Year" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cgpa">CGPA</Label>
                <Input id="cgpa" defaultValue="3.8" />
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Skills & Interests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="skills">Skills</Label>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'Node.js', 'Python', 'UI/UX'].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bio">About Me</Label>
                <Textarea
                  id="bio"
                  defaultValue="Passionate computer science student with interests in web development and artificial intelligence."
                />
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Activity & Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="communities">
                <TabsList>
                  <TabsTrigger value="communities">Communities</TabsTrigger>
                  <TabsTrigger value="applications">Applications</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>
                <TabsContent value="communities" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        name: 'Web Development',
                        role: 'Member',
                        posts: 12,
                      },
                      {
                        name: 'Machine Learning',
                        role: 'Member',
                        posts: 8,
                      },
                    ].map((community) => (
                      <Card key={community.name}>
                        <CardHeader>
                          <CardTitle>{community.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Role: {community.role}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Posts: {community.posts}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="applications" className="space-y-4">
                  <div className="grid gap-4">
                    {[
                      {
                        company: 'TechCorp',
                        position: 'Frontend Developer',
                        status: 'In Review',
                      },
                      {
                        company: 'DataCo',
                        position: 'Software Engineer',
                        status: 'Applied',
                      },
                    ].map((application) => (
                      <Card key={application.company}>
                        <CardHeader>
                          <CardTitle>{application.position}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Company: {application.company}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Status: {application.status}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="achievements" className="space-y-4">
                  <div className="grid gap-4">
                    {[
                      {
                        title: 'Hackathon Winner',
                        date: 'March 2024',
                        description: 'First place in college hackathon',
                      },
                      {
                        title: 'Best Project Award',
                        date: 'January 2024',
                        description: 'Department project competition winner',
                      },
                    ].map((achievement) => (
                      <Card key={achievement.title}>
                        <CardHeader>
                          <CardTitle>{achievement.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Date: {achievement.date}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

