import React,{useState,useEffect} from 'react'
import Appbar from '../Components/Appbar'
import YearlySolar from './YearlySolar';
import MonthlySolar from "./MonthlySolar"
import MonthlyRain from "./MonthlyRain"
import {useHistory} from 'react-router-dom'
import { GoogleMap, LoadScript ,Marker, MarkerClusterer} from '@react-google-maps/api';
import {Box, Typography,Button,Paper,ButtonGroup,AppBar,IconButton,Toolbar} from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CustomData from './CustomData';
//import MonthlyData from '../Hooks/MonthlyData'
{/** Maps API Key */}
{/** AIzaSyBO8Yh2KLflx9L2AyTseFOjeFGL2Wzu0kM */}

export default function Locations() {
    const history=useHistory()
    const [lat,setLat]=useState(23.8103)
    const [lng,setLng]=useState(90.4125)
    const [showData,setShowData]=useState(false)
    const [showMonthlyData,setShowMonthlyData]=useState(false)
    const [showYearlyData,setShowYearlyData]=useState(false)
    const [showCustomData,setShowCustomData]=useState(false)
    
    
    const containerStyle = {
        width: '90vw',
        height: "50vh"
      };
      
      const center = {
        lat: 23.8103,
        lng: 90.4125
      };
      
      const posChange = marker => {
        //console.log('marker: ', marker)
      }
      const getNewLocation = (e)=>{

        let location=e.latLng.toJSON()
        setLat(location.lat)
        setLng(location.lng)
        posChange()
      }


    
    return (
    <Box>
        <AppBar color="default">
            <Toolbar>
                <IconButton onClick={()=>{history.push("/choose")}}><ArrowBackIosIcon color="primary"/></IconButton>
                {!showData && <Typography fontFamily="Bree Serif" color="primary" fontSize="large">Choose your location</Typography>}
                {showMonthlyData && <Typography fontFamily="Bree Serif" color="primary" fontSize="large">Monthly Data</Typography>}
                {showYearlyData && <Typography fontFamily="Bree Serif" color="primary" fontSize="large">Yearly Data</Typography>}
                {showCustomData && <Typography fontFamily="Bree Serif" color="primary" fontSize="large">Custom Data</Typography>}
            </Toolbar>
        </AppBar>
        {!showData && <Box sx={{backgroundColor:"#f4f4f4",marginTop:"7vh",width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                  <Typography variant="h5" color="primary" fontFamily="Bree Serif" marginBottom="1vh" sx={{textAlign:"center"}}>Choose Your location on the map</Typography>
                  <Typography variant="p" color="primary" fontFamily="Bree Serif" marginBottom="1vh" sx={{textAlign:"center"}}>Current Latitude</Typography>
                  <Typography variant="p" fontFamily="Bree Serif" marginBottom="1vh" sx={{textAlign:"center", fontSize:"18px"}}>{lat}</Typography>
            
                  <Typography variant="p" color="primary" fontFamily="Bree Serif" marginBottom="1vh" sx={{textAlign:"center"}}>Current Longitude</Typography>
                  <Typography variant="p" fontFamily="Bree Serif" marginBottom="1vh" sx={{textAlign:"center", fontSize:"18px"}}>{lng}</Typography>
                  
                </Paper>
                <LoadScript
                    googleMapsApiKey="AIzaSyBO8Yh2KLflx9L2AyTseFOjeFGL2Wzu0kM"
                    
                    >
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                    
                    >
                    {/**Child Components**/}
                    <>
                    <Marker
                    onLoad={posChange}
                    position={{lat,lng}}
                    onDragEnd={getNewLocation}
                    draggable
                  />
                    </>
                    </GoogleMap>
                 </LoadScript> 
                {/** Input Fields */}
                {/*<Paper elevation={5} sx={{width:"60vw",minHeight:"40vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    
                    <Box sx={{width:"40vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    
                    <TextField id="outlined-basic" label="Start Date" variant="outlined" type="date" fullWidth sx={{marginTop:"5px"}}/>
                    <TextField id="outlined-basic" label="End Date" variant="outlined" type="date" fullWidth sx={{marginTop:"5px"}}/>
                    <Button variant="contained" sx={{marginTop:"3vh"}}>Get Data</Button>
                    </Box>
                </Paper>*/}
                <ButtonGroup sx={{marginBottom:"5vh",orientation:{xs:"vertical",md:"horizontal"}}}>
                  <Button onClick={()=>{setShowYearlyData(true);setShowData(true)}}  variant="contained" size="large" sx={{marginTop:"50px"}}><Typography variant='p' sx={{fontSize:{xs:"1rem",md:"1.5rem"},}} fontFamily="Bree Serif" color="white">Get Yearly Data</Typography></Button>
                  <Button onClick={()=>{setShowMonthlyData(true);setShowData(true)}}  variant="contained" size="large" sx={{marginTop:"50px"}}><Typography variant='p' sx={{fontSize:{xs:"1rem",md:"1.5rem"},}} fontFamily="Bree Serif" color="white">Get Monthly Data</Typography></Button>
                  <Button onClick={()=>{setShowCustomData(true);setShowData(true)}}  variant="contained" size="large" sx={{marginTop:"50px"}}><Typography variant='p' sx={{fontSize:{xs:"1rem",md:"1.5rem"},}} fontFamily="Bree Serif" color="white">Custom Data</Typography></Button>
    
                </ButtonGroup>

                
        </Box>}
        {showYearlyData && <YearlySolar lat={lat} lng={lng}/>}
        {showMonthlyData && <MonthlySolar lat={lat} lng={lng}/>}
        {showCustomData && <CustomData lat={lat} lng={lng}/>}
    </Box>
    )
}

