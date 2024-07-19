import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaUserTie } from "react-icons/fa"; // Using a more professional icon
import { FaWhatsappSquare } from "react-icons/fa";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  LogoLink, // Adding a styled component for the logo link
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" legacyBehavior>
        <LogoLink>
          <FaUserTie size="3rem" /> <Span>Praise Masunga</Span>
        </LogoLink>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://facebook.com">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://whatsapp.com">
        <FaWhatsappSquare size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
