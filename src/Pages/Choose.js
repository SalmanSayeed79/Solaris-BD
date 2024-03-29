import React from 'react'
import {useHistory} from "react-router-dom"
import {Container, Box, Typography,Button,AppBar,Toolbar,IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export default function Choose() {
    const history = useHistory()
    return (
        <Box>
        <AppBar color="default">
            <Toolbar>
                <IconButton onClick={()=>{history.push("/")}}><ArrowBackIosIcon color="primary"/></IconButton>
                <Typography fontFamily="Bree Serif" color="primary" fontSize="large">Choose your service</Typography>
            </Toolbar>
        </AppBar>

            <Box sx={{backgroundColor:"#ff9800",marginTop:"7vh",minWidth:"100vw",height:"93vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Typography fontFamily="Bree Serif" variant='h3' textAlign="center" color="#f4f4f4" sx={{marginBottom:"3vh",fontSize:{xs:"2rem",md:"3.5rem"}}} >What service are you looking for ?</Typography>

                <Button onClick={()=>{history.push("/locations")}} variant="contained" color="success" size="large" sx={{marginTop:"2rem"}}><Typography variant='h5' sx={{fontSize:{xs:"1.4rem",md:"2rem"}}} fontFamily="Bree Serif" color="#ff9800">Solar Panel Data</Typography></Button>
                <Button onClick={()=>{history.push("/tiltlocation")}} variant="contained" color="success" size="large" sx={{marginTop:"2rem"}}><Typography variant='h5' sx={{fontSize:{xs:"1.4rem",md:"2rem"}}} fontFamily="Bree Serif" color="#ff9800">Solar Panel Tilt Angle</Typography></Button>
                <Button onClick={()=>{history.push("/Farmingbasiclocation")}} variant="contained" color="success" size="large" sx={{marginTop:"2rem"}}><Typography variant='h5' sx={{fontSize:{xs:"1.4rem",md:"2rem"}}} fontFamily="Bree Serif" color="#ff9800">Farming Data</Typography></Button>
                <Button onClick={()=>{history.push("/precipitationLocation")}} variant="contained" color="success" size="large" sx={{marginTop:"2rem"}}><Typography variant='h5' sx={{fontSize:{xs:"1.4rem",md:"2rem"}}} fontFamily="Bree Serif" color="#ff9800">Historical Rainfall Data</Typography></Button>
         
            </Box>
        </Box>
    )
}


