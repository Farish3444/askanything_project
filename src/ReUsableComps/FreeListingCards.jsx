import {Button,Card,CardActionArea,CardActions,CardContent,CardMedia,Typography,makeStyles} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
    
  });

const FreeListingCards = ({image,title,heading,caption}) => {
    
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {caption}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    )
}

export default FreeListingCards
