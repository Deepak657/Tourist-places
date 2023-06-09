import React from "react";
import styled from "styled-components";

interface Iprops {
  text: string;

  onclick: () => void;
}

const FooterLink = ({ text, onclick }: Iprops) => {
  return <Paragraph onClick={onclick}>{text}</Paragraph>;
};

const Paragraph = styled.div`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #dedede;
  cursor: pointer;
`;

export default FooterLink;
