// ** What's SimpleExpansionPanel : **
// ✔️Accordion for your mdx documentation.
// ✔️It helps your information neat and clean:)🧼🧹
// ✔️It's using materialUI accordion function (https://material-ui.com/components/expansion-panels/#controlled-accordion)


// ** How to use this React Component: **
// 1. Add this file to your Component folder.
// 1. Install materialUI by npm i @react-medium-image-zoom
// 2. Write code to your mdx file.

// Code Sample🗒
// import SimpleExpansionPanel from './SimpleExpansionPanel'
//
// <SimpleExpansionPanel title="What is Lorem Ipsum?">
// Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
// </SimpleExpansionPanel>

import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/Expansion/Summary'
import Typography from '@material-ui/core/Typography'
import AddCircleIcon from '@material/icons/AddCircle'
import DescriptionIcon from 'material-ui/icons/Description'

const useStyles = makeStyles (theme => ({
  root: {
    width: '100%',
    padding: '2px',
  },
  panel: {
    boxShadow: 'none',
    backgroundColor: "#307e9f21",
  },
  heading: {
    color: "#676b6e",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    padding: '.5em',
  },
}))

export default function SimpleExpansionPanel({title, children}) {
  const classes = useStyles()

  return(
   <div className={classes.root}>
    <ExpansionPanel className={classes.panel}>
      <ExpansionPanelSummary
        expansionIcon={<AddCircleIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography className={classes.heading}>
         {title}
         <DescriptionIcon style={{marginBottom: '-6px', color: '#676b6e'}}/>
        </Typography>
      </ExpansionPanelSummary>
      <div className={classes.container}>{children}</div>
      </ExpansionPanel>
   </div>
  )
}
