import styled from "styled-components";

const Button = styled.button`
  background: #5400ff;
  font-size: 1rem;
  color: white;
  border: 0;
  padding: 0.5em 2em;
  border-radius: 16px;

  transition: background 0.5s;
  &:active,
  &:hover {
    background: #2b0082;
  }
`;
export default Button;
