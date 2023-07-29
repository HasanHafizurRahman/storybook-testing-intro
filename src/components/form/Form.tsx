// src/components/Form.tsx

import React from "react";

export interface FormProps {
  onSubmit: (data: FormData) => void;
  formData: FormData;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, formData, onChange }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
