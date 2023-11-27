import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../components/ui/switch';
import { Label } from '@/components/ui/label';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    render: (props) => (<div className="flex items-center space-x-2">
    <Switch id="airplane-mode" {...props} />
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
  </div>)

};



