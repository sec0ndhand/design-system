import type { Meta, StoryObj } from "@storybook/react";

import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";
import { ToggleGroupMultipleProps } from "@radix-ui/react-toggle-group";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<ToggleGroupMultipleProps>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (props: ToggleGroupMultipleProps) => (
    <ToggleGroup {...props} type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <span className="h-4 w-4">B</span>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <span className="h-4 w-4">
          <i>I</i>
        </span>
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <span className="h-4 w-4 underline">U</span>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
