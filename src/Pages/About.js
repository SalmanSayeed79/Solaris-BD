import React from 'react'
import {Box, Typography,Button,Paper} from '@mui/material'
import Appbar from '../Components/Appbar'
import Member from '../Components/Member'
export default function About() {
    return (
    <Box>
        <Box sx={{backgroundColor:"#f4f4f4",marginTop:"7vh",minWidth:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Typography fontFamily="Bree Serif" variant='h3' textAlign="center" color="primary" sx={{marginBottom:"3vh",fontSize:{xs:"2rem",md:"3.5rem"}}} >About</Typography>  
        </Box>
 
    </Box>
    )
}

