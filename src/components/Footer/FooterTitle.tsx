import React from "react";
import styled from "styled-components";

interface Iprops {
  text: string;

  onclick: () => void;
}

const FooterTitle = ({ text, onclick }: Iprops) => {
  return <Paragraph onClick={onclick}>{text}</Paragraph>;
};

const Paragraph = styled.div`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: rgb(241, 241, 241);
  cursor: pointer;
`;

export default FooterTitle;
