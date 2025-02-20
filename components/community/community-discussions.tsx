import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquare, ThumbsUp } from 'lucide-react'
import { useState } from 'react'

export function CommunityDiscussions() {
  // State to handle modal visibility and discussion data
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newDiscussion, setNewDiscussion] = useState({ title: '', content: '' })
  const [discussions, setDiscussions] = useState([
    { title: 'Understanding React Hooks', content: 'Let\'s discuss the best practices for using React Hooks in our projects...', description: 'Started by John Doe • 2 days ago', replies: 15, likes: 24 },
    { title: 'Next.js Performance Tips', content: 'Here are some advanced performance tips for Next.js...', description: 'Started by Jane Smith • 5 days ago', replies: 7, likes: 12 },
    { title: 'Introduction to TypeScript', content: 'A beginner-friendly discussion on TypeScript...', description: 'Started by Alice Cooper • 1 week ago', replies: 22, likes: 30 }
  ])

  // Handle modal toggle
  const handleNewDiscussionClick = () => {
    setIsModalOpen(true)
  }

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewDiscussion((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDiscussions([
      ...discussions,
      { title: newDiscussion.title, content: newDiscussion.content, description: 'Started by You • Just Now', replies: 0, likes: 0 }
    ])
    setNewDiscussion({ title: '', content: '' }) // Reset form
    setIsModalOpen(false) // Close modal
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Discussions</h2>
        <Button onClick={handleNewDiscussionClick}>
          <MessageSquare className="mr-2 h-4 w-4" />
          New Discussion
        </Button>
      </div>

      {/* Modal for New Discussion */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"> {/* z-50 to make it appear in front */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 z-60"> {/* Added z-60 to the modal itself */}
            <h3 className="text-xl font-semibold">Start a New Discussion</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newDiscussion.title}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Content</label>
                <textarea
                  name="content"
                  value={newDiscussion.content}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                  rows={4}
                  required
                />
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button type="button" onClick={() => setIsModalOpen(false)} variant="outline">
                  Cancel
                </Button>
                <Button type="submit">Post Discussion</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Discussions List */}
      <div className="grid gap-4">
        {discussions.map((discussion, index) => (
          <Card key={index} className="transform transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle>{discussion.title}</CardTitle>
              <CardDescription>{discussion.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {discussion.content}
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{discussion.replies} replies</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{discussion.likes} likes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
