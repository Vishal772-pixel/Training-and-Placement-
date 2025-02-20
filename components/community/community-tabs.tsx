'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CommunityDiscussions } from './community-discussions'
import { CommunityResources } from './community-resources'
import { CommunityMembers } from './community-members'

export function CommunityTabs() {
  return (
    <Tabs defaultValue="discussions" className="space-y-4">
      <TabsList>
        <TabsTrigger value="discussions">Discussions</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
        <TabsTrigger value="members">Members</TabsTrigger>
      </TabsList>
      <TabsContent value="discussions">
        <CommunityDiscussions />
      </TabsContent>
      <TabsContent value="resources">
        <CommunityResources />
      </TabsContent>
      <TabsContent value="members">
        <CommunityMembers />
      </TabsContent>
    </Tabs>
  )
}

