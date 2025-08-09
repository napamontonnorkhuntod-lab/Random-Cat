import axios from "axios";
import { useEffect, useState, type FormEvent } from "react";
import { Box,TextareaAutosize,Button,CircularProgress,Drawer,Container } from "@mui/material";
import { HighlightOff } from "@mui/icons-material";
import Post from "../components/post";

const Home:React.FC = () => {

    interface commentType {
        pic:string,
        comment:string[],
    }
    const [comment, setComment] = useState<commentType[]>([])
    const [image, setImage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const [textComment, setTextComment] = useState<string>('')

    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        console.log('open');
        
      setOpen(newOpen);
    };

    const fetchData = async() =>{              
        setLoading(true)
        setTextComment('')
        const res = await axios.get('https://cataas.com/cat')      
        setImage(res.data.url)           
        
        setTimeout(() => {
            setLoading(false)      
        }, 3000);                

    }

    const submit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()       
        console.log(textComment);  
        const test = comment.find(e=> e.pic === image)
        console.log('test=> ',test); 
        if(test != undefined){
            setComment(prev=> {
                const update = [...prev]
                
                update[update.length - 1].comment.push(textComment)
                return update
            })
        }else{
            setComment(prev=> {
                const update = [...prev]
                update.push({ pic: image, comment: [textComment] });                
                return update
            })  
        }        
        console.log('COMMENT=> ',comment);
        
    }

    useEffect(() => {
        console.log('Comment updated:', comment);
    }, [comment]);

    useEffect(() => {
      fetchData()    
    }, [])

    const DrawerList = (
        <>
            <Box
                sx={{
                    position:"fixed",
                    zIndex:1300,
                    top:20,
                    right:20,
                    cursor:'pointer'
                }}                
            >
                <Button >
                    <HighlightOff sx={{ color: 'black', fontSize: 40, zIndex: 1400 }}  onClick={toggleDrawer(false)}/>
                </Button>
            </Box>
            <Box sx={{width:'100vw',height:'100vh'}} role="slider" >
                <Box className='w-[100%] h-[100%] bg-white p-5'>
                    <Container>
                        <Box className="flex flex-wrap">
                            {
                                comment.map((e,i)=>(
                                    <Post 
                                        key={i}
                                        comment={e.comment}
                                        pic={e.pic}
                                    />
                                ))
                            }
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
    

    return(
        <>  
            <Box className="flex justify-center items-center w-full pt-5" sx={{flexDirection:'column'}}>
                <Box className="
                        w-[300px]
                        md:w-[400px]
                        lg:w-[600px]
                        xl:w-[650px]
                        2xl:w-[700px]
                        
                        h-[300px]
                        md:h-[400px]
                        lg:h-[600px]
                        xl:h-[650px]
                        2xl:h-[700px]
                        mx-auto
                ">
                    <img src={image || '/image/the-lucky-neko-2JcixB1Ky3I-unsplash.jpg'} alt="" 
                        className="object-cover w-full h-full rounded-lg shadow-md"
                    />
                </Box>
                <Box 
                    onSubmit={submit}
                    component={'form'}
                    sx={{
                        display:'flex',
                    }}
                    className="
                        w-[300px]
                        md:w-[400px]
                        lg:w-[600px]
                        xl:w-[650px]
                        2xl:w-[700px]
                    "
                >
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Minimum 3 rows"
                        className="
                            w-[90%]
                            
                        "
                        style={{
                            border:`1px solid #00000061`
                        }}
                        value={textComment}
                        onChange={(e) =>setTextComment((e.target.value))}
                    />

                    <Button variant="contained" color="success" type="submit" className="mr-3 w-[10%]">
                        Send
                    </Button>

                </Box>
                <Button 
                    disabled={loading} 
                    variant="contained" 
                    color="warning" 
                    className="
                        w-[300px]
                        md:w-[400px]
                        lg:w-[600px]
                        xl:w-[650px]
                        2xl:w-[700px]                        
                    "
                    onClick={fetchData}
                    sx={{
                        padding:'20px 0px 20px 0px'
                    }}
                    >
                    {loading 
                        ? <CircularProgress size={20} sx={{ color: 'black' }} /> 
                        : 'Random'}
                </Button>

                {
                    comment.length > 0 && (
                        <Button                                         
                            variant="contained" 
                            color="secondary" 
                            className="
                                w-[300px]
                                md:w-[400px]
                                lg:w-[600px]
                                xl:w-[650px]
                                2xl:w-[700px]                        
                            "
                            onClick={()=>(
                                setOpen(true)
                            )}
                        >
                            History    
                        </Button>
                    )
                }
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
            </Box>
        </>
    )
}
export default Home