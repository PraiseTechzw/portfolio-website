import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { FaUserTie, FaWhatsappSquare } from "react-icons/fa";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+263786223289">+263 78 622 3289</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:praisetechzw@gmail.com">
            praisetechzw@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>© 2024 All Rights Reserved, Praise Masunga</Slogan>
        </CompanyContainer>
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/praisetech1">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/praise-masunga-264288297/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://facebook.com/praisetechzw/">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://wa.me/263786223289">
            <FaWhatsappSquare size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
