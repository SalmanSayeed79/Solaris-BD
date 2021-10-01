import React,{useState,useEffect} from 'react'
import {Box, Typography,Paper, CircularProgress} from '@mui/material'
import {Bar} from 'react-chartjs-2'

export default function OptimalTilt({lat,lng}) {
    const [regPow,setRegPow]=useState(null)
    const [optPow,setOptPow]=useState(null)
    const [profit,setProfit]=useState(null)
    const [angle,setAngle]=useState(null)
    const [loading,setLoading]=useState(true)

    

   
   

    const getTiltData=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/daily/optimum?latitude=${lat}&longitude=${lng}`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let regPow=removeDecimal(data.regular_power_per_sqmeter)
          let optPow=removeDecimal(data.optimum_power_per_sqmeter)
          let percentage=removeDecimal(data.profit_percentage)
          let angle=removeDecimal(data.optimum_tilt_angle)

          setRegPow(regPow)
          setOptPow(optPow)
          setProfit(percentage)
          setAngle(angle)

          setLoading(false)
  
        })
        .catch((e)=>{console.log(e)})
    }

   
    useEffect(()=>{
      getTiltData()
    }, [])

    const removeDecimal =(num)=>{
        console.log(num)
        let removed=parseFloat(num)
        removed=removed.toFixed(2)
        return removed
    }
    return (
        <Box sx={{backgroundColor:"#f4f4f4",marginTop:"7vh",width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
        {/**Detail */}
        <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
            <Box>
                <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px",textAlign:"center"}}>Welcome to optimal tilt angle</Typography>
                <Typography fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Sometimes plating a solar panel does not mean we are going to get most out of our solar panels. Tilting them at a particular angle goes a long way when it comes to gaining proper flow of energy. In this page we have porvided, through intricate calculation, a particular tilt angle that will provide the most efficient amount of solar energy in a particular location.</Typography>
                <Box component="img" src={require("../Assets/SolarTilt.png").default} sx={{marginTop:"5vh", width:{xs:"90vw",md:"70vw"}}}></Box>
            </Box>
        </Paper>
        {/*!loading && 
            <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                <Box>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>2016 - 2020 </Typography>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                    <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{removeDecimal(parseFloat((getAvg(monthlyData2020)+getAvg(monthlyData2020)+getAvg(monthlyData2019)+getAvg(monthlyData2018)+getAvg(monthlyData2017)+getAvg(monthlyData2016))/5))}</Typography>

                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated rain that year : </Typography>
                    <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{removeDecimal(parseFloat((getYearlyUnits(getAvg(monthlyData2020))+getYearlyUnits(getAvg(monthlyData2019))+getYearlyUnits(getAvg(monthlyData2018))+getYearlyUnits(getAvg(monthlyData2017))+getYearlyUnits(getAvg(monthlyData2016)))/5))} mm</Typography>
                </Box>
                
            </Paper>
        */}
            {/*2020* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"20px"}}>Optimal Angle</Typography>
                        <Typography fontFamily="Bree Serif"  sx={{fontSize:"45px"}}>{angle}<sup>o</sup></Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Regular power (KW hr/m<sup>3</sup>): </Typography>
                        <Typography fontFamily="Bree Serif" color="red.main" sx={{fontSize:"30px"}}>{regPow}</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Optimal power (KW hr/m<sup>3</sup>): </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{optPow}</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Power Profit : </Typography>
                        <Typography fontFamily="Bree Serif" color="green.main" sx={{fontSize:"30px"}}>{profit} %</Typography>

                        
                    </Box>
                 
                </Paper>
            }
      
            {loading && <Box sx={{height:"93vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><CircularProgress color="primary"/><Typography fontFamily="Bree Serif" sx={{fontSize:"20px"}} color="primary">Loading Optimal Tilt Angle</Typography></Box>}
        </Box>
    )
}
