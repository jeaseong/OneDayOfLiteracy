import React from "react";
import { ImgComponent } from "../styles/Components/ComponentStyle";

export default function Image({ url, alt }) {
  return <ImgComponent src={url} alt={alt}></ImgComponent>;
}
