import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Logo from "../../../public/images/logo.svg";

function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <Image src={Logo} width={200} height={50} alt="Logo ErosEvent" />

        <nav>
          <ul>
            <li>
              <Link href="/eventos">Eventos</Link>
            </li>

            <li>
              <Link href="/perfil" className="login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  );
}

export default Header;

export const HeaderContainer = styled.header`
  display: flex;  
  padding-top: 40px;

  .container,
  ul {
    display: flex;
    justify-content: space-between;
  }

  ul {
    list-style: none;
    gap: 24px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  .login{
    border: 1px solid #fff;
    border-radius: 100px;
    padding: 4px 24px;
  }
`;
