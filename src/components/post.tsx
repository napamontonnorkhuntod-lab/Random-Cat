
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


interface PostProps{
    pic:string,
    comment:string[],
}


const Post:React.FC<PostProps> = (props)=> {
    
  return (    
    <Box className="w-100 lg:w-1/4">
      <Card sx={{ width:'100%' }}>
        <Box
          sx={{
            width:'100%',
            height:'270px',
            backgroundColor:'white'
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={props.pic || '/image/the-lucky-neko-2JcixB1Ky3I-unsplash.jpg'}
            className='w-full h-full object-cover'
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Post
