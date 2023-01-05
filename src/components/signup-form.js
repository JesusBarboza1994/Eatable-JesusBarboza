import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 258px;
`;

export default function SignupForm() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    signup(form).catch((error) => {
      const newErrors = JSON.parse(error.message);
      setErrors({ ...errors, ...newErrors });
    });
    navigate('/profile');
  }

  function handleFormChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  return (
    <Form type={"Sign Up"}
          form={form}
          handleSubmit={handleSubmit}
          handleFormChange={handleFormChange}/>
  )
}
