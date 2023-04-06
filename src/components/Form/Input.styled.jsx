import styled from '@emotion/styled';
import { transition } from 'helpers';

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 300;
`;

export const InputStyled = styled.input`
  width: 100%;
  font-size: 20px;
  border: none;
  padding: 12px 16px;
  outline: none;
  background-color: #ecf0f3;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  color: #000;
  font-weight: 600;
  border-radius: 5px;
  font-family: 'Gruppo', sans-serif;
  ${transition('box-shadow')};

  &:focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
  }
`;
