import styled from "@emotion/styled";
import { colors, typography } from "../styles";

const Label = styled.label``;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  style:none;
  background-color: white;
  color: ${colors.gray.dark};
  -webkit-appearance: none;
  border-bottom: 1px solid ${colors.black}
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

const Error = styled.p`
  color: red;
  padding-left: 1rem;
`;

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  onChange,
  error,
  ...rest
}) {
  name ||= id;

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {error && <Error size="sm">{error}</Error>}
    </InputContainer>
  );
}

export default Input;
