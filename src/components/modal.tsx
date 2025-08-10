import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface ModalProps {
    isModal:()=> void,
    comment:string[],
    openModal:boolean,
}

const BasicModal:React.FC<ModalProps> = (props) => {



  const style = {
    color:'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>      
      <Modal
        open={props.openModal}        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}
            className="
                w-[300px]
                md:w-[400px]
                lg:w-[600px]
                xl:w-[650px]
                2xl:w-[700px]

                h-[400px]
                md:h-[500px]
                lg:h-[700px]
                xl:h-[750px]
                2xl:h-[800px]

                overflow-y-auto
            "
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comment
          </Typography>
                <ul className="list-disc">
                    {
                        props.comment.map((e,i)=>(
                            <li className="my-3" key={i}>
                                {e}
                            </li>    
                        ))
                    }            
                </ul>
          <Button variant="contained" color="error" className="w-full" onClick={props.isModal}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
export default BasicModal