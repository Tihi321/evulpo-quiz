import React from 'react';
import { RoundButton } from '../RoundButton';

const meta = {
  title: 'Components/Inputs/RoundButton',
  component: RoundButton,
  argTypes: {
    checked: {
      defaultValue: true,
    },
    disabled: {
      defaultValue: false,
    },
    value: {
      defaultValue: 'Button Text',
      control: { type: 'text' },
    },
    label: {
      defaultValue: 'Label Text',
      control: { type: 'text' },
    },
    type: {
      defaultValue: "primary",
      options: ["primary", "success", "error", "inactive"],
      control: { type: "radio" },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => <RoundButton {...args} onClick={(values) => {
  console.log(values);
}}/>;

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
