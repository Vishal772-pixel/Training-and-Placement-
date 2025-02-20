import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, FileText, Upload, Video } from 'lucide-react'

export function CommunityResources() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Resources</h2>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload Resource
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: 'React Fundamentals PDF',
            type: 'Document',
            icon: FileText,
            downloads: 45,
          },
          {
            title: 'State Management Tutorial',
            type: 'Video',
            icon: Video,
            downloads: 32,
          },
        ].map((resource) => (
          <Card key={resource.title} className="transform transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <resource.icon className="h-5 w-5" />
                {resource.title}
              </CardTitle>
              <CardDescription>{resource.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Download className="h-4 w-4" />
                  <span>{resource.downloads} downloads</span>
                </div>
                <Button variant="secondary" size="sm">
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

