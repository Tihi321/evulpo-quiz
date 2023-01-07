import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Inputs/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      defaultValue: "Button",
      control: { type: "text" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    size: {
      defaultValue: "regular",
      options: ["regular", "small"],
      control: { type: "radio" },
    },
    type: {
      defaultValue: "primary",
      options: ["primary", "secondary", "success", "error", "inactive"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Medium = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
