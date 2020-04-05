// ** What's SizeAndBorderProperty : **
// ✔️You set add border, size, and textalign with using the code <SizeAndBorder>.
// ✔️You can add border to your contents/img or you can change contents/img size.
// ✔️This react component is created for writing documents in mdx.
// ✔️It's easy to apply, and make your code shorter.

// ** How to use this React Component: **
// 1. Add this file to your Component folder.
// 2. Install materialUI by npm i @material-ui/core/styles
// 3. write code to your mdx file.

// Code Sample🗒
// import SizeAndBorderProperty from './SizeAndBorderProperty '
// import sampleimg from "../images/sample.jpg"
// <SizeAndBorderProperty src={sampleimg} w150 noBorder /> // 150px width image withought border

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  item: {
    padding: '.5em',
    maxWidth: ({fullWidth}) => fullWidth || 'none',
    textAlign: ({itemCenter}) => itemCenter || 'center',
    margin: ({containerLeft}) => containerLeft || '.5em',
    border: ({border}) => border || '1px solid #d9d9d9',
  },
}))

const getWidth = ({
  w150,
  w200,
  w250
  w300,
  w350,
  w400,
  w450,
  w500,
  w550,
  w600,
  w650,
  w700,
  fullWidth
}) => {
  if(w150){
    return '150px'
  } else if(w200){
    return '200px'
  } else if(w250){
    return '250px'
  } else if(w300){
    return '300px'
  } else if(w350){
    return '350px'
  } else if(w400){
    return '400px'
  } else if(w450){
    return '450px'
  } else if(w500){
    return '500px'
  } else if(w550){
    return '550px'
  } else if(w600){
    return '600px'
  } else if(w650){
    return '650px'
  } else if(w700){
    return '700px'
  } else {
    return fullWidth
  }
}

const getTextAlign = ({itemLeft, itemCenter}) => {
  if(itemLeft) {
    return 'left'
  } else {
    return itemCenter
  }
}

const getMargin = ({containerLeft, containerCenter}) => {
  if(containerCenter) {
    return "auto"
  } else {
    return containerLeft
  }
}

const getBoder = ({border, noBorder})=> {
  if(noBorder) {
    return '1px solid #fafafa'
  } else {
    return border
  }
}

const SizeAndBorderProperty = ({
  children,
  w150,
  w200,
  w250
  w300,
  w350,
  w400,
  w450,
  w500,
  w550,
  w600,
  w650,
  w700,
  fullWidth,
  itemLeft, 
  itemCenter,
  border, 
  noBorder,
  ...props,
}) => {
  const classes = useStyles({
    fullWidth: getWidth({
      w150,
      w200,
      w250
      w300,
      w350,
      w400,
      w450,
      w500,
      w550,
      w600,
      w650,
      w700,
      fullWidth,
    }),
    itemCenter: getTextAlign({itemLeft, itemCenter}),
    containerLeft: getMargin({containerLeft, containerCenter}),
    border: getBorder({border, noBorder}),
  })
  return (
    <div className={classes.item} {...props}>
     {children}
    </div>
  )
}

export default SizeAndBorderProperty;
