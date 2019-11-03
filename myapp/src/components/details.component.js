import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { pink } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const useStyles = makeStyles(theme => ({

  container:{
    backgroundColor: pink[100]
  },
  card: {
    maxWidth: 600,
  },
  media: {
    height: 600,
  },
  // paper:{
  //   padding: theme.spacing(2),
  //  textAlign: 'center',
  //  color: theme.palette.text.secondary,
  // },
  paper: {
    padding: theme.spacing(3, 2),
    width: 600,
    margin: 10
  }
}));
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
