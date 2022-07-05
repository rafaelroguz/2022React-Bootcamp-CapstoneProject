import styled from 'styled-components'
import colors from 'styles/colors'

export const InputField = styled.input`
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  height: 48px;
  width: 100%;

  &:active,
  &:focus {
    outline: ${colors.secondary} solid 1px;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`
