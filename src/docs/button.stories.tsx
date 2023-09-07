import type { Meta, StoryObj } from "@storybook/react";

import { Icon, Button } from "@/components/ui";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Button>
      <Icon name="Box" />
      Hello World!
    </Button>
  ),
};

export const Outlined: Story = {
  render: () => (
    <Button variant="outlined">
      <Icon name="Box" />
      Hello World!
    </Button>
  ),
};

export const Tonal: Story = {
  render: () => (
    <Button variant="tonal">
      <Icon name="Box" />
      Hello World!
    </Button>
  ),
};

export const Text: Story = {
  render: () => (
    <Button variant="text">
      <Icon name="Box" />
      Hello World!
    </Button>
  ),
};
