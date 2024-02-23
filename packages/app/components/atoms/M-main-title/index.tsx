import { H1, styled } from "@my/ui";
import React from "react";

const StyledH1 = styled(H1, {
  size: 16,
  mb: 10,
  mt:20,
  style: { fontWeight: 600 },
  // fontWeight:'bold'
});

type MainTitleProps = {
  children: React.ReactNode;
};

const M_MainTitle: React.FC<MainTitleProps> = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export { M_MainTitle };
