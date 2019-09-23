import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { withStyles } from "@material-ui/core/styles"
// import Grid from 

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: `center`,
    color: theme.palette.text.secondary,
  },
  title: {
    marginBottom: `2rem`,
    color: theme.palette.primary.main
  },
})

class Members extends Component {
  render() {
    const { classes } = this.props
    return (
      <Layout>
        <SEO title="Members" />
        <h1 className={classes.title}>Sacramento Philatelic Society</h1>
        <h2>Members</h2>
        <div>this is a grid</div>
        <Link to="/">Return Home</Link>
      </Layout>
    )
  }
}

export default withStyles(styles)(Members)
