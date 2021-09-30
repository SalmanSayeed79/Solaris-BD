import React from 'react'
import {Box, Typography,Button,Paper} from '@mui/material'
import Appbar from '../Components/Appbar'
import Member from '../Components/Member'
export default function About() {
    return (
    <Box>
        <Appbar active={2}/>
        <Box sx={{backgroundColor:"primary.main",minWidth:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <Typography fontFamily="Bree Serif" variant='h3' textAlign="center" color="primary.contrastText" sx={{marginBottom:"3vh",marginTop:{xs:"15vh",md:"3vh"},fontSize:{xs:"2rem",md:"3.5rem"}}} >Meet the team</Typography>
            <Paper elevation={10} sx={{minHeight:"70vh",width:"80vw",display:"flex",flexDirection:{xs:"column",md:"row"},flexWrap:"wrap",alignItems:"center",justifyContent:"space-around",marginBottom:"5vh"}}>
                <Member name="Motasim Bhuiyan Rafeed" uni="Innopolis University" country="Russia" member={3}/>
                <Member name="Mohammed Sakirul Alam" uni="Notre Dame College" country="Bangladesh" member={4}/>
                <Member name="Almoaid Hashem Hashem Nafady" uni="Innopolis University" country="Russia" member={5}/>
                <Member name="Anas Al Atasi" uni="Innopolis University" country="Russia" member={6}/>
                <Member name="Salman Sayeed" uni="Bangladesh University of Engineering and Technology" country="Bangladesh" member={1}/>
                <Member name="Zarif Ikram" uni="Bangladesh University of Engineering and Technology" country="Bangladesh" member={2}/>
            </Paper>
        </Box>
    </Box>
    )
}

