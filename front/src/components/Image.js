import React from "react";
import { ImgComponent } from "../styles/Components/componentStyle";

export default function Image({ url, alt }) {
  return <ImgComponent src={url} alt={alt}></ImgComponent>;
}
