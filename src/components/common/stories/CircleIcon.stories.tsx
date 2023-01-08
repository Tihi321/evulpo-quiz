import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CricleIcon } from "../CricleIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Common/CricleIcon",
  component: CricleIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {
      defaultValue: "?",
      control: { type: "text" },
    },
    animate: {
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof CricleIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CricleIcon> = (args) => <CricleIcon {...args} />;

export const Default = Template.bind({});
