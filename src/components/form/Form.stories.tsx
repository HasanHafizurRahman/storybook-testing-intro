// src/stories/Form.stories.tsx

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Form, { FormData, FormProps } from "./Form";
// import Form, { FormProps } from "../components/Form";

export default {
  title: "Components/Form",
  component: "Form",
  argTypes: {
    onSubmit: { action: "submitted" },
  },
} as Meta;

const Template: Story<FormProps & { formData: FormData }> = (args) => {
  const [formData, setFormData] = React.useState<FormData>(args.formData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return <Form {...args} formData={formData} onChange={handleChange} />;
};

export const DefaultForm = Template.bind({});
DefaultForm.args = {
  onSubmit: (data) => {
    console.log("Form submitted with data:", data);
  },
  formData: {
    firstName: "",
    lastName: "",
    email: "",
  },
};
