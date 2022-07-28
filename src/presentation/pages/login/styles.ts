import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 16px;
  background-color: #2d047a;
  padding: 32px;
  border-radius: 4px;
`

export const Title = styled.h1`
  text-align: center;
  color: white;
`

export const Loading = styled.span`
  font-size: 16px;
  color: white;
`

export const Error = styled.span`
  font-size: 16px;
  color: red;
`
