import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;


const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    render: (props) => (
      <ScrollArea {...props} className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag) => (
            <>
              <div key={tag} className="text-sm">
                {tag}
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
    )

};



