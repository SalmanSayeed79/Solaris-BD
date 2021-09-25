import React from 'react'
import {Box,Avatar, Typography} from '@mui/material'




export default function Member({name,uni,country,member}) {
    return (
        <Box sx={{display:"flex",alignItems:"center",width:{xs:"70vw",md:"30vw"},height:{xs:"12vh",md:"20vh"}}}>
            <Avatar alt="Salman Sayeed" src={require(`../Assets/Members/${member}.png`).default} sx={{width:{xs:"70px",md:"120px"},height:{xs:"70px",md:"120px"},marginRight:"20px"}}/>
            <Box >
                <Typography fontFamily="Bree Serif" sx={{fontSize:{xs:"14px",md:"16px"},fontWeight:"600"}}>{name}</Typography>
                <Typography  fontFamily="Bree Serif" sx={{fontSize:{xs:"11px",md:"16px"}}}>{uni}</Typography>
                <Typography fontFamily="Bree Serif" sx={{fontSize:{xs:"12px",md:"16px"}}}>{country}</Typography>
            </Box>
        </Box>
    )
}
