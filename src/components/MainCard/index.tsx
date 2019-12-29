import React from "react";
import styled, { css } from "styled-components";
import {
  smallDesktop,
  middleDesktop,
  tablet,
  largeMobile
} from "../../lib/viewport";

const Wrap = styled.div`
  margin-top: 10vh;
`;
const Card = styled.article`
  background: white;
  margin: 2em;
  margin-top: 0;
  padding: 2.5em 5em;
  font-size: 18px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.17);

  ${middleDesktop.max(css`
    font-size: 16px;
  `)}
  ${smallDesktop.max(css`
    font-size: 13px;
  `)}
  ${tablet.max(css`
    padding: 2em 2em;
  `)}
  ${largeMobile.max(css`
    padding: 2em 1.5em;
    margin: 1em;
  `)}
`;

interface MainCardProps {
  children: React.ReactNode;
}
function MainCard({ children }: MainCardProps) {
  return (
    <Wrap>
      <Card>{children}</Card>
    </Wrap>
  );
}

export default MainCard;
