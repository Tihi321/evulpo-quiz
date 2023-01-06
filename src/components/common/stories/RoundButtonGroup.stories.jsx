import map from "lodash/map";
import get from "lodash/get";
import React from 'react';
import { RoundButtonGroup } from "../RoundButtonGroup";

const items = [{
  value: "button_1",
  label: "Button 1",
  disabled: false,
  type: "primary"
},
{
  value: "button_2",
  label: "Button 2",
  disabled: false,
  type: "success"
},
{
  value: "button_3",
  label: "Button 3",
  disabled: false,
  type: "error"
},
{
  value: "button_4",
  label: "Button 4",
  disabled: true,
  type: "inactive"
}];

const meta = {
  title: 'Components/Inputs/RoundButtonGroup',
  component: RoundButtonGroup,
  argTypes: {
    selected: {
      defaultValue: get(items, [0, "value"]),
      options: map(items, values => get(values, ["value"])),
      control: { type: 'radio' },
    },
    type: {
      defaultValue: "primary",
      options: ["primary", "success", "error", "inactive"],
      control: { type: "radio" },
    },
    disabled: {
      defaultValue: false,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => <RoundButtonGroup items={items} onChange={(values) => {
  console.log(values);
}} {...args}/>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
