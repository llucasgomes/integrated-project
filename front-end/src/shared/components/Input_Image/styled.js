import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 9rem;
`;

export const FieldStyled = styled.input`
  padding-left: 1rem;
  border-radius: 0.2rem;
  border: 0.1rem solid #aaaaaa;
  outline: none;
  font-size: 1.2rem;
  width: 10rem;
`;

export const ErrorStyled = styled.span`
  color: red;
  font-size: 0.7rem;
`;

export const Label = styled.label`
  text-transform: capitalize;
  font-size: 0.8rem;
`;

export const RequiredLabel = styled.span`
  color: red;
`;
