import axios from "axios";
import { useEffect, useState, type FormEvent } from "react";
import { Box,TextareaAutosize,Button,CircularProgress } from "@mui/material";

const Home:React.FC = () => {
    
    const [comment, setComment] = useState({
        comment:'',
        pic:''
    })
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchData = async() =>{     
        setComment(()=>({
            comment:'',
            pic:''
        }))           
        setLoading(true)
        const res = await axios.get('https://cataas.com/cat')      
        setImage(res.data.url)   
        setComment((prev)=> ({
            ...prev,
            pic:res.data.url
        }))     
        
        setTimeout(() => {
            setLoading(false)      
        }, 3000);                

    }

    const submit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(comment);
        setComment((prev)=>({
            ...prev,
        }))
        
    }

    useEffect(() => {
      fetchData()    
    }, [])
    

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
                        onChange={e=> setComment(prev=> ({...prev,comment:e.target.value}))}
                    />

                    <Button variant="contained" color="success" type="submit" className="mr-3 w-[10%]">
                        Send
                    </Button>

                </Box>
                <Button 
                    disabled={loading} 
                    type="submit" 
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
                    >
                    {loading 
                        ? <CircularProgress size={20} sx={{ color: 'black' }} /> 
                        : 'Random'}
                </Button>
            </Box>
        </>
    )
}
export default Home