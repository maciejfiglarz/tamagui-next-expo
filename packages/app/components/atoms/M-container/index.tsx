import React from "react";
import { View, styled } from "@my/ui";

const StyledView = styled(View, {
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 1200,
  paddingRight: 10,
  paddingLeft: 10,
  marginTop:20,
  marginBottom:20

});

type ContainerProps = {
  children: React.ReactNode;
};

const M_Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};

export { M_Container };
