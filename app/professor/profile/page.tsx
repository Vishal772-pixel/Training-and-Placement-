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

export default function ProfessorProfilePage() {
  const { user } = useAuth()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
            <p className="text-muted-foreground">
              Manage your professional information and communities
            </p>
          </div>
          <Button>Save Changes</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <Button variant="outline">Change Photo</Button>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Prof. Smith" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="smith@university.edu" type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" defaultValue="Computer Science" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Background</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Input id="specialization" defaultValue="Software Engineering" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" defaultValue="15" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="research">Research Interests</Label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Distributed Systems',
                    'Cloud Computing',
                    'Software Architecture',
                  ].map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Bio & Expertise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="bio">Professional Bio</Label>
                <Textarea
                  id="bio"
                  defaultValue="Professor of Computer Science with 15 years of experience in software engineering and distributed systems. Published researcher and industry consultant."
                />
              </div>
              <div className="grid gap-2">
                <Label>Areas of Expertise</Label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Software Engineering',
                    'Distributed Systems',
                    'Cloud Architecture',
                    'System Design',
                    'Web Technologies',
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Communities & Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="communities">
                <TabsList>
                  <TabsTrigger value="communities">Communities</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="publications">Publications</TabsTrigger>
                </TabsList>
                <TabsContent value="communities" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        name: 'Advanced Web Development',
                        members: 45,
                        activity: 'High',
                      },
                      {
                        name: 'System Design',
                        members: 32,
                        activity: 'Medium',
                      },
                    ].map((community) => (
                      <Card key={community.name}>
                        <CardHeader>
                          <CardTitle>{community.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Members: {community.members}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Activity: {community.activity}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="courses" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      {
                        name: 'Software Engineering',
                        code: 'CS301',
                        students: 60,
                      },
                      {
                        name: 'Distributed Systems',
                        code: 'CS401',
                        students: 45,
                      },
                    ].map((course) => (
                      <Card key={course.name}>
                        <CardHeader>
                          <CardTitle>{course.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Course Code: {course.code}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Students: {course.students}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="publications" className="space-y-4">
                  <div className="grid gap-4">
                    {[
                      {
                        title: 'Modern Distributed Systems Architecture',
                        journal: 'IEEE Software',
                        year: 2023,
                      },
                      {
                        title: 'Cloud-Native Application Design',
                        journal: 'ACM Computing Surveys',
                        year: 2022,
                      },
                    ].map((publication) => (
                      <Card key={publication.title}>
                        <CardHeader>
                          <CardTitle>{publication.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            Journal: {publication.journal}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Year: {publication.year}
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

