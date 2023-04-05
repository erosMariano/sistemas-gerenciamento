import Image from 'next/image'
import React from 'react'
import styled from 'styled-components';
import Logo from "../../assets/images/logo.svg";
function Footer() {
  return (
    <FooterContainer>
      <Image alt='' src={Logo} width={200} height={54} />
    </FooterContainer>
  )
}

export default Footer

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin-top: 70px;
  background-color: #1d1d1d;
`