import React,{useState} from 'react'
import {AppBar,Toolbar, Typography,IconButton,Box,Button, ButtonGroup} from '@mui/material'
import {useHistory} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


export default function Appbar() {
    const [active,setActive]=useState(0)
    const history=useHistory()
    const homeClick=()=>{
        setActive(0);
        history.push("/")
    }
    const locationsClick=()=>{
        setActive(1);
        history.push("/locations")
    }
    const aboutClick=()=>{
        setActive(2);
        history.push("/about")
    }
    return (
        <AppBar color="default" sx={{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around"}}>
            <Toolbar>
                {/*<IconButton><MenuIcon color="white"/></IconButton>*/}
                <Typography color="primary" variant="h4" fontFamily={"Righteous"} sx={{marginLeft:"1rem"}}>Solaris</Typography>
            </Toolbar>
            <Box sx={{height:"7vh",display:"flex",alignItems:"center"}}>
                <ButtonGroup variant="outlined" color="primary">
                    {active==0 ? <Button variant="contained" onClick={homeClick}>Home</Button> : <Button variant="outlined" onClick={homeClick}>Home</Button>}
                    {active==1 ? <Button variant="contained" onClick={locationsClick}>Locations</Button> : <Button variant="outlined" onClick={locationsClick}>Locations</Button>}
                    {active==2 ? <Button variant="contained" onClick={aboutClick}>About</Button> : <Button variant="outlined" onClick={aboutClick}>About</Button>}
                    
                </ButtonGroup> 
            </Box>
        </AppBar>
    )
}
