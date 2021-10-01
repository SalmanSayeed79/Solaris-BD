import React,{useState,useEffect} from 'react'
import {Box, Typography,Paper, CircularProgress,Tooltip,ButtonGroup,Button} from '@mui/material'
import {Bar} from 'react-chartjs-2'

export default function YearlyFarmingBasic({lat,lng}) {
    const [monthlyRainData,setMonthlyRainData]=useState([])
    const [monthlyRainData2021,setMonthlyRainData2021]=useState([])
    const [monthlyRainData2020,setMonthlyRainData2020]=useState([])
    const [monthlyRainData2019,setMonthlyRainData2019]=useState([])
    const [monthlyRainData2018,setMonthlyRainData2018]=useState([])
    const [monthlyRainData2017,setMonthlyRainData2017]=useState([])
    const [monthlyRainData2016,setMonthlyRainData2016]=useState([])

    const [monthlyHumidityData2020,setMonthlyHumidityData2020]=useState([])
    const [monthlyHumidityData2019,setMonthlyHumidityData2019]=useState([])
    const [monthlyHumidityData2018,setMonthlyHumidityData2018]=useState([])
    const [monthlyHumidityData2017,setMonthlyHumidityData2017]=useState([])
    const [monthlyHumidityData2016,setMonthlyHumidityData2016]=useState([])

    const [monthlyWindData2020,setMonthlyWindData2020]=useState([])
    const [monthlyWindData2019,setMonthlyWindData2019]=useState([])
    const [monthlyWindData2018,setMonthlyWindData2018]=useState([])
    const [monthlyWindData2017,setMonthlyWindData2017]=useState([])
    const [monthlyWindData2016,setMonthlyWindData2016]=useState([])

    const [monthlyTempData2020,setMonthlyTempData2020]=useState([])
    const [monthlyTempData2019,setMonthlyTempData2019]=useState([])
    const [monthlyTempData2018,setMonthlyTempData2018]=useState([])
    const [monthlyTempData2017,setMonthlyTempData2017]=useState([])
    const [monthlyTempData2016,setMonthlyTempData2016]=useState([])

    const [loading,setLoading]=useState(true)
    const [detailed,setDetailed]=useState(false)
    const [active,setActive]=useState(0)



    function getAvg(arr){
        let sum=0
        let count=0
        arr.forEach(a=>{
            sum+=a;
            count++;
        })
        let avg=sum/count
        avg=avg.toFixed(2)
        return avg
    }
    function getYearlyUnits(num){
        let units=num*365
        units=units.toFixed(2)
        return units
    }
    const MonthlyRainData=()=>{
        setLoading(true)
        MonthlyRainData2020()
        MonthlyRainData2019()
        MonthlyRainData2018()
        MonthlyRainData2017()
        MonthlyRainData2016()
       
        
    }

    const MonthlyRainData2020=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=T2M,RH2M,PRECTOTCORR,WS10M&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2020&end=2020`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let temp=data.properties.parameter.T2M
          let humidity=data.properties.parameter.RH2M
          let rain=data.properties.parameter.PRECTOTCORR
          let wind=data.properties.parameter.WS10M
          let tempKeys = Object.values(temp)
          let humidityKeys = Object.values(humidity)
          let rainKeys = Object.values(rain)
          let windKeys = Object.values(wind)
          setMonthlyTempData2020(tempKeys)
          setMonthlyHumidityData2020(humidityKeys)
          setMonthlyRainData2020(rainKeys)
          setMonthlyWindData2020(windKeys)
          
        })
        .catch((e)=>{console.log(e)})
    }
    const MonthlyRainData2019=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=T2M,RH2M,PRECTOTCORR,WS10M&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2019&end=2019`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
            let temp=data.properties.parameter.T2M
            let humidity=data.properties.parameter.RH2M
            let rain=data.properties.parameter.PRECTOTCORR
            let wind=data.properties.parameter.WS10M
            let tempKeys = Object.values(temp)
            let humidityKeys = Object.values(humidity)
            let rainKeys = Object.values(rain)
            let windKeys = Object.values(wind)
            setMonthlyTempData2019(tempKeys)
            setMonthlyHumidityData2019(humidityKeys)
            setMonthlyRainData2019(rainKeys)
            setMonthlyWindData2019(windKeys)
        })
        .catch((e)=>{console.log(e)})
    }
   
    const MonthlyRainData2018=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=T2M,RH2M,PRECTOTCORR,WS10M&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2018&end=2018`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
            let temp=data.properties.parameter.T2M
            let humidity=data.properties.parameter.RH2M
            let rain=data.properties.parameter.PRECTOTCORR
            let wind=data.properties.parameter.WS10M
            let tempKeys = Object.values(temp)
            let humidityKeys = Object.values(humidity)
            let rainKeys = Object.values(rain)
            let windKeys = Object.values(wind)
            setMonthlyTempData2018(tempKeys)
            setMonthlyHumidityData2018(humidityKeys)
            setMonthlyRainData2018(rainKeys)
            setMonthlyWindData2018(windKeys)
        })
        .catch((e)=>{console.log(e)})
    }
    const MonthlyRainData2017=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=T2M,RH2M,PRECTOTCORR,WS10M&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2017&end=2017`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
            let temp=data.properties.parameter.T2M
            let humidity=data.properties.parameter.RH2M
            let rain=data.properties.parameter.PRECTOTCORR
            let wind=data.properties.parameter.WS10M
            let tempKeys = Object.values(temp)
            let humidityKeys = Object.values(humidity)
            let rainKeys = Object.values(rain)
            let windKeys = Object.values(wind)
            setMonthlyTempData2017(tempKeys)
            setMonthlyHumidityData2017(humidityKeys)
            setMonthlyRainData2017(rainKeys)
            setMonthlyWindData2017(windKeys)
        })
        .catch((e)=>{console.log(e)})
    }
    const MonthlyRainData2016=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=T2M,RH2M,PRECTOTCORR,WS10M&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2016&end=2016`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
            let temp=data.properties.parameter.T2M
            let humidity=data.properties.parameter.RH2M
            let rain=data.properties.parameter.PRECTOTCORR
            let wind=data.properties.parameter.WS10M
            let tempKeys = Object.values(temp)
            let humidityKeys = Object.values(humidity)
            let rainKeys = Object.values(rain)
            let windKeys = Object.values(wind)
            setMonthlyTempData2016(tempKeys)
            setMonthlyHumidityData2016(humidityKeys)
            setMonthlyRainData2016(rainKeys)
            setMonthlyWindData2016(windKeys)
            setLoading(false)
        })
        .catch((e)=>{console.log(e)})
    }
   
   
    useEffect(()=>{
      MonthlyRainData()
    }, [])

    const removeDecimal =(num)=>{
        console.log(num)
        let removed=parseFloat(num)
        removed=removed.toFixed(2)
        return removed
    }
    const tempDefine=(temp)=>{
        if(temp<10){return "Extremely Cold"}
        else if(temp<20){return "Cold"}
        else if(temp<24){return "Mildly Cold"}
        else if(temp<32){return "Moderate"}
        else if(temp<35){return "Mildly Hot"}
        else if(temp<42){return "Hot"}
        else if(temp>42){return "ExtremelyHot"}
    }
    const windDefine=(wind)=>{
        if(wind<10){return "Calm"}
        else if(wind<20){return "Strong wind"}
        else{return "Extremely Windy"}
    }
    const rainDefine=(rain)=>{
        if(rain<60){return "Light Rain"}
        else if(rain<182.4){return "Moderate Rain"}
        else{return "Heavy Rain"}
    }
    const humidityDefine=(hum)=>{
        if(hum<30){return "Dry"}
        else if(hum<70){return "Moderately Humid"}
        else{return "Wet"}
    }
    return (
        <Box sx={{backgroundColor:"#f4f4f4",marginTop:"7vh",width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
        {/*!loading && 
            <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                <Box>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>2016 - 2020 </Typography>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                    <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{removeDecimal(parseFloat((getAvg(monthlyRainData2020)+getAvg(monthlyRainData2020)+getAvg(monthlyRainData2019)+getAvg(monthlyRainData2018)+getAvg(monthlyRainData2017)+getAvg(monthlyRainData2016))/5))}</Typography>

                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated rain that year : </Typography>
                    <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{removeDecimal(parseFloat((getYearlyUnits(getAvg(monthlyRainData2020))+getYearlyUnits(getAvg(monthlyRainData2019))+getYearlyUnits(getAvg(monthlyRainData2018))+getYearlyUnits(getAvg(monthlyRainData2017))+getYearlyUnits(getAvg(monthlyRainData2016)))/5))} mm</Typography>
                </Box>
                
            </Paper>
        */}
            {/**Detail */}
            <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                <Box sx={{width:{xs:"75vw",md:"40vw"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px",textAlign:"center"}}>Welcome to yearly farming data</Typography>
                    <Typography fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Farmers are not particularly knowledgeable when it comes to working with data in particular. This is why we have two types of data in this page. One is a basic verdict on the weather and the other is a detailed version for students and researchers. In this page we are showing the amount of average rain, temperature, humidity, wind in a yearly average value.</Typography>
                    <Box component="img" src={require("../Assets/Farming.png").default} sx={{marginTop:"5vh", width:{xs:"90vw",md:"30vw"}}}></Box>
                </Box>
            </Paper>

             {!loading &&
            <Box sx={{marginTop:"5vh",display:"flex",alignItems:"center"}}>
                <ButtonGroup variant="outlined" color="primary">

                    {active==0 ? (<Button variant="contained" onClick={()=>{setDetailed(false);setActive(0)}}>Basic</Button> ): <Button variant="outlined" onClick={()=>{setDetailed(false);setActive(0)}}>Basic</Button>}
                    {active==1 ? (<Button variant="contained" onClick={()=>{setDetailed(true);setActive(1)}}>Detailed</Button>) : <Button variant="outlined" onClick={()=>{setDetailed(true);setActive(1)}}>Detailed</Button>}

                </ButtonGroup> 
            </Box>
            }

            {/*2020* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>2020</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyTempData2020)+" C") : (tempDefine(getAvg(monthlyTempData2020)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyRainData2020)+" mm") : (rainDefine(getAvg(monthlyRainData2020)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                   
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyHumidityData2020)+" %") : (humidityDefine(getAvg(monthlyHumidityData2020)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
           
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyWindData2020)+" m/s") : (windDefine(getAvg(monthlyWindData2020)))}
                        </Typography>

                    </Box>
                </Paper>
            }

            {/*2019* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>2019</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyTempData2019)+" C") : (tempDefine(getAvg(monthlyTempData2019)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyRainData2019)+" mm") : (rainDefine(getAvg(monthlyRainData2019)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                   
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyHumidityData2019)+" %") : (humidityDefine(getAvg(monthlyHumidityData2019)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
           
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyWindData2019)+" m/s") : (windDefine(getAvg(monthlyWindData2019)))}
                        </Typography>

                    </Box>
                </Paper>
            }
            
            {/*2018* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>2018</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyTempData2018)+" C") : (tempDefine(getAvg(monthlyTempData2018)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyRainData2018)+" mm") : (rainDefine(getAvg(monthlyRainData2018)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                   
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyHumidityData2018)+" %") : (humidityDefine(getAvg(monthlyHumidityData2018)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
           
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyWindData2018)+" m/s") : (windDefine(getAvg(monthlyWindData2018)))}
                        </Typography>

                    </Box>
                </Paper>
            }
            {/*2017* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>2017</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyTempData2017)+" C") : (tempDefine(getAvg(monthlyTempData2017)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyRainData2017)+" mm") : (rainDefine(getAvg(monthlyRainData2017)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                   
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyHumidityData2017)+" %") : (humidityDefine(getAvg(monthlyHumidityData2017)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
           
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyWindData2017)+" m/s") : (windDefine(getAvg(monthlyWindData2017)))}
                        </Typography>

                    </Box>
                </Paper>
            }

            {/*2016* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>2016</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyTempData2016)+" C") : (tempDefine(getAvg(monthlyTempData2016)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyRainData2016)+" mm") : (rainDefine(getAvg(monthlyRainData2016)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                   
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyHumidityData2016)+" %") : (humidityDefine(getAvg(monthlyHumidityData2016)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
           
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(monthlyWindData2016)+" m/s") : (windDefine(getAvg(monthlyWindData2016)))}
                        </Typography>

                    </Box>
                </Paper>
            }
            {loading && <Box sx={{height:"93vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><CircularProgress color="primary"/><Typography fontFamily="Bree Serif" sx={{fontSize:"20px"}} color="primary">Loading Yearly Data</Typography></Box>}
        </Box>
    )
}
