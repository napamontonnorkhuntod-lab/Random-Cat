import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

import BasicModal from "../components/modal";


interface PostProps{
    pic:string,
    comment:string[],
}


const Post:React.FC<PostProps> = (props)=> {

  const [openModal, setOpenModal] = useState(false);

  const isModal = () => {
    setOpenModal(prev=> !prev)
  }
    
  return (    
    <>
      < BasicModal isModal={isModal} openModal={openModal} comment={props.comment}/>

      <Box className="w-100 md:w-1/2 lg:w-1/4 p-4">
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
          <CardActions>
            <Button size="small" className='w-full' onClick={isModal}>Comment</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default Post
