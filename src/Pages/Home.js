import React from 'react'
import {Box, Typography,Button,Paper} from '@mui/material'
import Appbar from '../Components/Appbar'
import Member from '../Components/Member'
export default function Home() {
    return (
    <Box>
        <Box sx={{backgroundColor:"#f4f4f4",marginTop:"7vh",minWidth:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Typography fontFamily="Bree Serif" variant='h3' textAlign="center" color="primary" sx={{marginBottom:"3vh",fontSize:{xs:"2rem",md:"3.5rem"}}} >Building a better world</Typography>
                <Button variant="contained" size="large"><Typography variant='h5' sx={{fontSize:{xs:"1.4rem",md:"2rem"}}} fontFamily="Bree Serif" color="white">Get Started</Typography></Button>
                <Box component="img" src={require("../Assets/Home.png").default} sx={{marginTop:"5vh", width:{xs:"90vw",md:"70vw"}}}></Box>
                
        </Box>
       
       </Box>
    )
}

