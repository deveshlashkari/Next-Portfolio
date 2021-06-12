import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineHeart,
} from "react-icons/ai";

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
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import { DiCssdeck, DiStackoverflow } from "react-icons/di";
import { BiCodeCurly } from "react-icons/bi";
import { SocialIconsLink } from "../../constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem
            href="https://api.whatsapp.com/send/?phone=917828873973&text=Hi+Devesh%2C%0A&app_absent=0"
            target="_blank"
            style={{ display: "flex" }}
          >
            <RiWhatsappFill size="3rem" style={{}} />
            <span style={{ marginTop: "5px", marginLeft: "5px" }}>
              Whatsapp
            </span>
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem
            href="mailto:deveshlashkari@gmail.com?subject=FW: Hello Devesh! Whatsup! &amp;body=How are you?"
            style={{ display: "flex" }}
          >
            <MdEmail size="3rem" style={{}} />
            <span style={{ marginTop: "5px", marginLeft: "5px" }}>
              Send a Hi on email!
            </span>
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with &hearts; by Devesh Lashkari</Slogan>
        </CompanyContainer>
        <SocialIcons href={SocialIconsLink.github}>
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href={SocialIconsLink.linkedin}>
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href={SocialIconsLink.instagram}>
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href={SocialIconsLink.facebook}>
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href={SocialIconsLink.stackoverflow}>
          <DiStackoverflow size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
