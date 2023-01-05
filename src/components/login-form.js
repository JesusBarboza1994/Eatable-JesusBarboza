import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Button from "./Button";
import Input from "./Input";
import {useNavigate} from 'react-router-dom';
import Form from "./Form";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 258px;
`;

export default function LoginForm() {

  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    login(form).catch((error) => console.log(error));
    navigate('/home');
  }

  function handleFormChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  }

  return (
    <Form type={"Login"}
          form={form}
          handleSubmit={handleSubmit}
          handleFormChange={handleFormChange}/>
  );
}

