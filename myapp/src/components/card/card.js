import React from 'react';
import { useStyles } from './style';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';


export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        title={ <p className={classes.title} >{props.name}</p>}
        subheader={props.type}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.score}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          onClick={props.showDetails}
          aria-label="info">
          <InfoIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
