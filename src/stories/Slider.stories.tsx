import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '../components/ui/slider';
import { cn } from "@/lib/utils"


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Slider',
  component: Slider,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    render: (props) => (
      <div className="w-[400]">
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn("w-[60%]", props.className)}
          {...props}
        />
      </div>
    )

};



