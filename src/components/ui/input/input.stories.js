import React from "react"
import { Input } from "components/ui"
import styled from "styled-components"

const Warper = styled.div`
  display: flex;
  width: 90%;
`

export default { title: 'Input' }

export const DefaultInput = () => <Warper><Input /></Warper>

export const LargeInput = () => <Warper><Input size="large" /></Warper>

export const ErrorInput = () => <Warper><Input errors={['パスワードを入力してください']}/></Warper>
