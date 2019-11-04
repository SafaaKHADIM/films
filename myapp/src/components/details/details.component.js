import React from 'react';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {useStyles} from './style.js'


export default function Details(props) {
  const classes = useStyles();
  const html = props.summary;

  return (
    <Container fixed className={classes.container}>
    <Grid container spacing={3}>
        <Grid item xs={6}>
        <div className={classes.root}>
        <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={props.image}
                title="Contemplative Reptile"
              />
          </Card>
        </div>
        </Grid>
        <Grid item xs={6}>

          <Paper className={classes.paper}>
            <Typography variant="h5" component="h3">
              {props.name}
            </Typography>
          </Paper>
          <Paper className={classes.paper}>average rating :{props.rating}</Paper>
          <Paper className={classes.paper}>oficial site : {props.officialSite}</Paper>
          <Paper className={classes.paper}>summary :{ ReactHtmlParser(html) }</Paper>


        </Grid>
      </Grid>

    </Container>

  );
}
