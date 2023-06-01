import React from "react";
import styled from "styled-components";
interface Ibutton {
  text: string;
  onclick: () => void;
  icon: any;
  padding: string;
  fontSize: string;
}

const ButtonComponent = ({
  text,
  onclick,
  icon,
  padding,
  fontSize,
}: Ibutton) => {
  return (
    <Button onClick={onclick} padding={padding} fontSize={fontSize}>
      {icon}
      {text}
    </Button>
  );
};

const Button = styled.button<{ padding: string; fontSize: string }>`
  color: ${({ theme }) => theme.colors.heading};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.heading};
  border-radius: 5px;
  padding: ${({ padding }) => padding};
  font-family: sans-serif;
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  :hover {
    background: ${({ theme }) => theme.colors.heading};
    color: #fff;
    transition: 0.4s;
  }
`;

export default ButtonComponent;
