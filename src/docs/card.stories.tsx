import { Meta, StoryObj } from "@storybook/react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardExtra,
  CardHeader,
  CardMedia,
  Icon,
} from "@/components/ui";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const BasicUsage: Story = {
  render: () => (
    <Card style={{ width: 400 }}>
      <CardMedia alt="image" src="http://placekitten.com/500/500" />

      <CardBody>
        <CardExtra>
          <Badge>Tag Content</Badge>
          <Badge color="info">Tag Content</Badge>
          <Badge color="danger">Tag Content</Badge>
        </CardExtra>
        <CardHeader subtitle="Card Subtitle" title="Card Title" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima
        rerum vero. Accusantium, error, expedita facilis hic, in laudantium
        natus nihil non pariatur porro quam sed sint sit tenetur vero!
        <CardExtra position="end">
          <Button color="neutral" variant="text">
            Button
          </Button>

          <Button variant="tonal">
            <Icon name="Box" /> Button
          </Button>
        </CardExtra>
      </CardBody>
    </Card>
  ),
};
