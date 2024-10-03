"use client";
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "@/components/ui/calendar";
import { DayPickerSingleProps, SelectRangeEventHandler } from "react-day-picker";

type CalendarDemoProps = DayPickerSingleProps | { onSelect: SelectRangeEventHandler };

export function CalendarDemo(props: CalendarDemoProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());


  return (
    <Calendar
      mode="single"
      selected={date}
      className="rounded-md border"
      {...props}
      onSelect={(_, dateNew) => setDate(dateNew)}
    />
  );
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<CalendarDemoProps>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (props: CalendarDemoProps) => <CalendarDemo {...props} />,
};
