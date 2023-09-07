import { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "@/components/ui";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const BasicUsage: Story = {
  render: () => (
    <form>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <TextInput
            endIcon="Box"
            helpText="This is some help text"
            label="Text Input"
            placeholder="Input"
            prefix="https://"
            startIcon="Box"
          />
        </div>
      </div>
    </form>
  ),
};
