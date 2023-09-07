import { Meta, StoryObj } from "@storybook/react";
import { DialogClose } from "@radix-ui/react-dialog";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  Icon,
} from "@/components/ui";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const BasicUsage: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icon name="AppWindow" />
          Open Dialog
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Hello, World!</DialogTitle>
        <DialogDescription>This is a dialog.</DialogDescription>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi
        consectetur, corporis cumque deserunt ducimus explicabo fugiat hic illum
        incidunt itaque magnam nisi odit praesentium provident quaerat similique
        sit vero?
        <DialogFooter>
          <DialogClose asChild>
            <Button color="neutral" variant="text">
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="tonal">Confirm</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
