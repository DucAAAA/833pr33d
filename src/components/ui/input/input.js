// @flow

import React from "react"
import styled, { css } from "styled-components"
import { isEmpty } from "lodash"

import errorImg from "assests/images/icons/error.png"

type Props = {
  size: string,
  width: Number,
  errors: Array<string>
}

const WarpperContainer = styled.div`
  position: relative;
  width: 100%;
`

const InputContainer = styled.div`
  width: 100%;
`

const StyledInput = styled.input`
  position: relative;
  display: inline-block;
  width: ${props => props.width || 100}%;
  transition: all 0.3s;
  border: 0.1rem solid ${props => props.theme.grayLight};
  border-radius: 0.4rem;
  padding: 0.4rem 1.1rem;
  height: 4.8rem;
  box-sizing: border-box;

  ${props => props.size === 'small' && css`
    height: 3.6rem;
  `}

  ${props => !isEmpty(props.errors) && css`
    padding-right: 2.8rem;
    border: 0.1rem solid ${props => props.theme.inputDangerBorder};
  `}

  &:focus {
    border-color: ${props => props.theme.inputBorder};
    border-right-width: 0.1rem !important;
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => props.theme.inputFocusShadow};

    ${props => !isEmpty(props.errors) && css`
      border-color: ${props => props.theme.inputDangerBorder};
      box-shadow: 0 0 0 0.2rem ${props => props.theme.inputDangerFocusShadow};
  `}
  }
`

const Error = styled.div`
  color: ${props => props.theme.errorMessages};
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
`

const ErrorIcon = styled.img`
  position: absolute;
  right: 0.6rem;
  top: 1.4rem;
  z-index: 100;

  ${props => props.size === 'small' && css`
    top: 0.8rem;
  `}
`

const Input = ({size = "small", width, errors=[], ...restProps} : Props) => {
  return(
    <InputContainer>
      <Error>{errors.join(', ')}</Error>
      <WarpperContainer>
        {!isEmpty(errors) && <ErrorIcon src={errorImg} size={size}/>}
        <StyledInput {...restProps} size={size} width={width} errors={errors}/>
      </WarpperContainer>
    </InputContainer>
  )
}

export default Input
