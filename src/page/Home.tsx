import axios from "axios";
import { useEffect, useState, type FormEvent } from "react";
import { Box,TextareaAutosize,Button,CircularProgress } from "@mui/material";

const Home:React.FC = () => {
    
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchData = async() =>{                
        setLoading(true)
        const res = await axios.get('https://cataas.com/cat')      
        setImage(res.data.url)        
        
        setTimeout(() => {
            setLoading(false)      
        }, 3000);                

    }

    const submit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetchData()
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
                        xl:w-[700px]
                        2xl:w-[800px]
                        
                        h-[300px]
                        md:h-[400px]
                        lg:h-[600px]
                        xl:h-[700px]
                        2xl:h-[800px]
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
                        width:"100%",
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'column',
                    }}
                >
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Minimum 3 rows"
                        className="
                            w-[300px]
                            md:w-[400px]
                            lg:w-[600px]
                            xl:w-[700px]
                            2xl:w-[800px]
                            my-4
                        "
                        style={{
                            border:`1px solid #00000061`
                        }}
                    />

                    <Button 
                    disabled={loading} 
                    type="submit" 
                    variant="contained" 
                    color="warning" 
                    className="mx-auto"
                    >
                    {loading 
                        ? <CircularProgress size={20} sx={{ color: 'black' }} /> 
                        : 'Random'}
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default Home