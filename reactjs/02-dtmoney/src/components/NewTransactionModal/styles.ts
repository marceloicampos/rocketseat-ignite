import styled from "styled-components"
import { darken, transparentize } from 'polished'

export const ContainerFormModal = styled.form`
h2 {
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;
  background: #e7e9ee;
  border: 1px solid #d7d7d7;
  font-weight: 400;
  font-size: 1rem;
  
  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  };
}

/* hide arrows of input number Works for Firefox */
input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
}

/* hide arrows of input number Works for Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

button[type="submit"] {
  background: var(--green);
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  color: #ffffff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
}
`

export const TransactionTypeContainer = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.25rem;
`

interface RadioBoxProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#e62e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
height: 4rem;
border: 1px solid #d7d7d7;
border-radius: 0.25rem;
background: ${(props) => props.isActive 
? transparentize(0.7, colors[props.activeColor])
: 'transparent'
};
display: flex;
align-items: center;
justify-content: center;

transition: all 0.2s;

&:hover {
  border-color: ${darken(0.1, '#d7d7d7')};
  filter: brightness(0.9);
}

img {
  height: 20px;
  width: 20px;
}

span {
  display: inline-block;
  margin-left: 1rem;
  font-size: 1rem;
  color: var(--text-title);
}
`
