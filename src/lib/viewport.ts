import { css, FlattenSimpleInterpolation } from "styled-components";

export function makeViewport(size: number) {
  return {
    max: (style: FlattenSimpleInterpolation) => css`
      @media (max-width: ${size}px) {
        ${style}
      }
    `,
    min: (style: FlattenSimpleInterpolation) => css`
      @media (min-width: ${size + 1}px) {
        ${style}
      }
    `,
    viewport: size
  };
}

export const smallDesktop = makeViewport(1100);
export const middleDesktop = makeViewport(1534);
export const hd = makeViewport(960);
export const tablet = makeViewport(768);
export const smallTablet = makeViewport(600);
export const largeMobile = makeViewport(500);
