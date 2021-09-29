import React,{useState} from 'react'
import {AppBar,Toolbar, Typography,IconButton,Box,Button, ButtonGroup} from '@mui/material'
import {useHistory} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


export default function Appbar(props) {
    const [active,setActive]=useState(0)
    const history=useHistory()
    const homeClick=()=>{
        setActive(0);
        history.push("/")
    }
    const servicesClick=()=>{
        setActive(1);
        history.push("/choose")
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
                    {props.active==0 ? <Button variant="contained" onClick={homeClick}>Home</Button> : <Button variant="outlined" onClick={homeClick}>Home</Button>}
                    {props.active==1 ? <Button variant="contained" onClick={servicesClick}>Services</Button> : <Button variant="outlined" onClick={servicesClick}>Services</Button>}
                    {props.active==2 ? <Button variant="contained" onClick={aboutClick}>About</Button> : <Button variant="outlined" onClick={aboutClick}>About</Button>}
                    
                </ButtonGroup> 
            </Box>
        </AppBar>
    )
}
