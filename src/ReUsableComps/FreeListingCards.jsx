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
        <CardContent styles={{maxHeight:"100px"}} >
          <Typography gutterBottom variant="h5" component="h2">
           {heading.slice(0,15)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           { caption.length > 100 ? caption.slice(0,100) + "...." : caption}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    )
}

export default FreeListingCards
