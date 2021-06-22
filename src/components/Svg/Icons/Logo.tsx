import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image width="32" height="32" href="https://ik.imagekit.io/sih3mpiiiaae/wagyuswap-logo-text_uhU0sJo3w.svg" />
    </Svg>
  );
};

export default Icon;
