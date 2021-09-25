import React,{useState} from 'react'
import { GoogleMap, LoadScript ,Marker, MarkerClusterer} from '@react-google-maps/api';
import {Box, Typography,Button,Paper,TextField} from '@mui/material'
import Appbar from '../Components/Appbar'
import Member from '../Components/Member'
{/** Maps API Key */}
{/** AIzaSyBO8Yh2KLflx9L2AyTseFOjeFGL2Wzu0kM */}
export default function Locations() {
    const [lat,setLat]=useState(23.8103)
    const [lng,setLng]=useState(90.4125)
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
        <Box sx={{backgroundColor:"#f4f4f4",marginTop:"7vh",width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
                <Typography fontFamily="Bree Serif" variant='h3' textAlign="center" color="primary" sx={{marginBottom:"3vh",marginTop:{xs:"7vh",md:0},fontSize:{xs:"2rem",md:"3.5rem"}}} >Locations</Typography> 
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
                <Paper elevation={5} sx={{width:"60vw",minHeight:"40vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography variant="h5" color="primary" fontFamily="Bree Serif" marginBottom="1vh">Enter the parameters</Typography>
                    <Box sx={{width:"40vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <TextField id="outlined-basic" label="Latitude" variant="outlined" type="number" value={lat} fullWidth sx={{marginTop:"5px"}}/>
                    <TextField id="outlined-basic" label="Longitude" variant="outlined" type="number" value={lng} fullWidth sx={{marginTop:"5px"}}/>
                    <TextField id="outlined-basic" label="Start Date" variant="outlined" type="date" fullWidth sx={{marginTop:"5px"}}/>
                    <TextField id="outlined-basic" label="End Date" variant="outlined" type="date" fullWidth sx={{marginTop:"5px"}}/>
                    <Button variant="contained" sx={{marginTop:"3vh"}}>Get Data</Button>
                    </Box>
                </Paper>
        </Box>
        
    </Box>
    )
}

