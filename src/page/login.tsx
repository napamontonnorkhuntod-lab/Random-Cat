import { Box,Typography,TextField,InputAdornment,FormControl, InputLabel, 
OutlinedInput, IconButton, FormHelperText, Button,  } from "@mui/material";
import { AccountCircle, VisibilityOff, Visibility  } from "@mui/icons-material";
import { useState, type FormEvent } from "react";

import { useNavigate } from "react-router-dom";

const Login:React.FC = () => {

    const navigate = useNavigate()

    const [isError, setIsError] = useState({
        username:false,
        password:false,
    })

    const [form, setForm] = useState({
        username:'',
        password:'',
    })
    
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    const submit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('FORM',form);        
        
        const errors = {
            username: form.username.trim() === '',
            password: form.password.trim() === '',
        }

        setIsError(errors)
        
        if(errors.username || errors.password) return

        navigate('/home')
    }

    return(
        <>
            <Box                
                className="
                    w-[70%]
                    lg:w-[60%]

                    h-[50%]

                    p-4
                    bg-[#000000ba]                    
                "
                sx={{
                    borderRadius:'10px',
                    position:"fixed",
                    top:'50%',
                    left:'50%',
                    transform: 'translate(-50%,-50%)',
                    zIndex:999
                }}
            >
                <Typography variant="h2" textAlign={'center'} fontWeight={'800'} color="white">
                    Login
                </Typography>   

                <Box 
                    onSubmit={submit}
                    component={'form'} 
                    className="flex my-4"
                    sx={{
                        flexDirection:'column',
                        alignItems:'center',
                    }}
                >
                    <TextField 
                        sx={{
                            input:{color:'white'},
                            width:{
                                xs:'97%',
                                md:'70%',                                
                            },           
                            marginBottom:'10px'     
                        }} 
                        slotProps={{
                            input: {
                            startAdornment: (
                                <InputAdornment position="start" >
                                <AccountCircle sx={{color:'white'}}/>
                                </InputAdornment>
                            ),
                            },
                        }}        
                        onChange={(e)=> setForm(prev => ({...prev, username:e.target.value }))}                
                        id="outlined-basic" 
                        label="Username" 
                        variant="outlined"   
                        placeholder="Username"
                        error={isError.username}                      
                        helperText={ isError.username ? `This field is required`: ''}
                    />

                    <FormControl 
                        sx={{
                            input:{color:'white'},
                            width:{
                                xs:'97%',
                                md:'70%',
                            },          
                            margin:'15px 0px 15px 0px'      
                        }} 
                        className="my-6"
                        variant="outlined"
                    >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={(e)=> setForm(prev=> ({...prev, password:e.target.value}))}
                            error={isError.password}
                            label="Password"
                        />

                        {
                            isError.password &&(
                                <FormHelperText
                                    sx={{
                                        color:'red',
                                    }}
                                >
                                    {'This field is required'}
                                </FormHelperText>
                            )
                        }
                    </FormControl>

                    <Button variant="contained" className="w-[200px]" type="submit">Sign In</Button>
           
                </Box>

            </Box>

            <Box className="w-full h-[100vh]">
                <img src="/image/the-lucky-neko-2JcixB1Ky3I-unsplash.jpg" alt="" className="object-cover w-full h-full"/>
            </Box>
        </>
    )
}
export default Login
