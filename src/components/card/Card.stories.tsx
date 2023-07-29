// src/stories/Card.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Card, { CardProps } from "./Card";
// import Card from "../components/Card";

export default {
  title: "Components/Atomic/Card",
  component: Card,
  argTypes: {
    imageSrc: {
      control: "text",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
} as Meta;

const Template: Story<CardProps> = (args: any) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  imageSrc:
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
  title: "Default Card",
  description: "This is a default card.",
};
