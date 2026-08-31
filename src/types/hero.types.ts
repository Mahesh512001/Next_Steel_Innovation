import type { JSX } from "react";

export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  label?: JSX.Element;
}