import { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  Icon,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui";

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const BasicUsage: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Group 1</DropdownMenuLabel>
          <DropdownMenuItem>
            <Icon name="Box" />
            Apples
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="Box" />
            Bananas
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="Box" />
            Pears
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="Box" />
            Watermelons
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Group 2</DropdownMenuLabel>
          <DropdownMenuItem>
            <Icon name="Box" />
            Apples
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="Box" />
            Bananas
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="Box" />
            Pears
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="Box" />
            Watermelons
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
