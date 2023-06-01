import React from "react";
import styled from "styled-components";

interface Iprops {
  text: string;
  color: string;
  fontSize: string;
  onclick: () => void;
}

const FooterLink = ({ text, color, fontSize, onclick }: Iprops) => {
  return (
    <Paragraph color={color} fontSize={fontSize} onClick={onclick}>
      {text}
    </Paragraph>
  );
};

const Paragraph = styled.div<{ color: string; fontSize: string }>`
  font-family: sans-serif;
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  cursor: pointer;
`;

export default FooterLink;
