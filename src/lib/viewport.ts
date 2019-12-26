import { css, FlattenSimpleInterpolation } from "styled-components";

export function makeViewport(size: string) {
  return {
    max: (style: FlattenSimpleInterpolation) => css`
      @media (max-width: ${size}) {
        ${style}
      }
    `,
    min: (style: FlattenSimpleInterpolation) => css`
      @media (min-width: ${size}) {
        ${style}
      }
    `
  };
}

export const smallDesktop = makeViewport("1080px");
export const middleDesktop = makeViewport("1534px");
export const hd = makeViewport("960px");
