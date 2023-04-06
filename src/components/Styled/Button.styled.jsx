import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const Button = styled.button`
  border: none;
  flex-basis: 50%;
  border-radius: 30px;
  background-color: ${props => colors[props.design || 'color1']};
  padding: 10px 20px 8px 20px;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
  ${transition('transform', 'box-shadow')};

  &:hover {
    transform: scale(1.1);
    box-shadow: 10px 10px 16px #b7becb, -8px -8px 16px #f9f9f9;
  }
`;
