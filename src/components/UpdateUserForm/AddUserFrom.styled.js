import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  margin: 20px;
`;

export const Label = styled.label`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  color: black;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: red;
  }
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
`;

export const Button = styled.button`
  height: 40px;
  width: 150px;
  border-radius: 10px;
  border: 1px solid black;
  margin: 20px;

  &:hover {
    color: red;
    transition: 0.3s;
    cursor: pointer;
  }
`;
