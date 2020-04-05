// ** What's ZoomImage🔎 : **
// ✔️It's an image zoom-in function from medium(https://rpearce.github.io/react-medium-image-zoom/?path=/story/)
// ✔️Here I'm showing how to apply this zoomin extended libraly source to your react component.

// ** How to use this React Component: **
// 1. Add this file to your Component folder.
// 1. Install materialUI by npm i @react-medium-image-zoom
// 2. Write code to your mdx file.

// Code Sample🗒
// import ZoomImage from './ZoomImage '
// import sampleimg from "../images/sample.jpg"
//
// <ZoomImage alt='sampleimg' src={sampleimg} />

import React from 'react';
import zoomIn from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ZoomImage = ({src, alt}) = {
  return (
    <figure style={{margin: 0}}>
    <ZoomIn overlayBgColorEnd={"#30309c"}>
      <img alt={alt} src={src} style={{width: '100%'}} />
    </ZoomIn>
    </figure>
  )
}

export default zoomIn;
