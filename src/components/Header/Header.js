import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { DiCssdeck, DiStackoverflow } from "react-icons/di";
import { BiCodeCurly } from "react-icons/bi";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

import { SocialIconsLink } from "../../constants/constants";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "#FFFFFF",
            marginBottom: "20px",
          }}
        >
          <BiCodeCurly size="3rem" /> <Span>Devesh Lashkari</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technology">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
