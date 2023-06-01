import React from "react";
import { ImAirplane } from "react-icons/im";

interface Iprops {
  color: string;
  fontSize: string;
}
const Logo = ({ color, fontSize }: Iprops) => {
  return <ImAirplane style={{ color: color, fontSize: fontSize }} />;
};

export default Logo;
