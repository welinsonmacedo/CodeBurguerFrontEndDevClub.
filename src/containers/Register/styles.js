/* eslint-disable prettier/prettier */
import styled from 'styled-components'

import backg from '../../assets/backg.svg'

export const Container = styled.section`
  background-image: url(${backg});
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerItens = styled.main`
  background: #373737;
  height: 53em;
  width: 40em;
  border-radius: 0 10px 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 4em;
  img {
    position: relative;
    top: 0em;
  }
  .btnEye {
    border: none;
    background: none;
    height: 25px;
    width: 25px;
    position: relative;
    left: 13.7em;
    font-size: 1.2rem;
    color: #ffffff;
    bottom: ${props => (props.error ? '7.67em' : '6.5em')};
  }
`
export const P = styled.p`
  color: #ffffff;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`
export const Label = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  height: 43px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  margin: 0 0 3em;
  border: ${props => (props.validIpnut ? '2px solid #CC1717;' : 'none')};
  padding-left: 10px;
`

export const SignInParag = styled.p`
  color: #ffffff;
  position: relative;
  top: -1em;
  margin: 0 0 0 10px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;

  a {
    text-decoration: underline;
  }
`
export const MessageError = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  position: relative;
  top: -25px;
`
