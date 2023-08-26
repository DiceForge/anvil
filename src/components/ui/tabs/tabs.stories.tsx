import type { Meta, StoryObj } from "@storybook/react";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsExtra,
} from "@/components/ui/tabs/tabs";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const BasicUsage: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsExtra>
          <Button size="small" variant="tonal">
            Action
          </Button>
        </TabsExtra>
      </TabsList>

      <TabsContent value="tab1">
        Tab 1 content Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ad adipisci atque blanditiis, esse eum ex fugiat illo impedit maxime
        molestias mollitia, obcaecati, possimus quas rem vel? Aut cupiditate
        reiciendis repellendus.
      </TabsContent>

      <TabsContent value="tab2">
        Tab 2 content Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ad adipisci atque blanditiis, esse eum ex fugiat illo impedit maxime
        molestias mollitia, obcaecati, possimus quas rem vel? Aut cupiditate
        reiciendis repellendus.
      </TabsContent>

      <TabsContent value="tab3">
        Tab 3 content Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ad adipisci atque blanditiis, esse eum ex fugiat illo impedit maxime
        molestias mollitia, obcaecati, possimus quas rem vel? Aut cupiditate
        reiciendis repellendus.
      </TabsContent>
    </Tabs>
  ),
};
