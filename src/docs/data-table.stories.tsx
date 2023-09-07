import { Meta, StoryObj } from "@storybook/react";
import { ColumnDef } from "@tanstack/react-table";

import { DataTable } from "@/components/ui/data-table/data-table.tsx";
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
} from "@/components/ui";

const meta: Meta<typeof DataTable> = {
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

interface User {
  name: string;
  email: string;
  role: "admin" | "user";
}

const roles = {
  admin: "Admin",
  user: "User",
};

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email Address",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (props) => {
      const role = props.getValue() as "admin" | "user";

      return (
        <Badge color={role === "admin" ? "danger" : "neutral"}>
          {roles[role]}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => {
      return (
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button iconButton color="neutral" size="small" variant="text">
                <Icon name="MoreVertical" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent size="xs">
              <DropdownMenuItem>View</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

const users: User[] = [
  {
    name: "Jonathan Joestar",
    email: "jonathan@joestar.com",
    role: "admin",
  },
  {
    name: "Joseph Joestar",
    email: "joseph@joestar.com",
    role: "admin",
  },
];

export const BasicUsage: Story = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <DataTable columns={columns} data={users} />
    </div>
  ),
};
