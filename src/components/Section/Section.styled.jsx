import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const SectionContainer = styled.section`
  width: 550px;
  max-width: 100%;
  height: auto;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
  padding: 1px;
  backdrop-filter: blur(2px);
  overflow: hidden;
  position: relative;
  z-index: 0;
  padding: 24px;

  ${transition('height')}

  &.form {
    padding-top: 100px;
    padding-bottom: 150px;
    z-index: 1;
  }

  &.form::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
    bottom: -60%;
    left: -60%;
    transition: 1.25s;
    z-index: -1;
  }

  &.form::after {
    content: '';
    position: absolute;
    top: -30%;
    left: 60%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
    transition: 1.25s;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 30px;
`;
