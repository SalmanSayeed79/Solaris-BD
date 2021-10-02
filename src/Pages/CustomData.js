import React,{useState,useEffect} from 'react'
import {Box, Typography,Paper, CircularProgress, TextField,Button} from '@mui/material'
import {Line} from 'react-chartjs-2'

export default function CustomData({lat,lng}) {
    const [data,setData]=useState([])
    const [rainData,setRainData]=useState([])
    const [humidityData,setHumidityData]=useState([])
    const [windData,setWindData]=useState([])
    const [tempData,setTempData]=useState([])

    const [sunLabels,setSunLabels]=useState([])
    const [rainLabels,setRainLabels]=useState([])
    const [tempLabels,setTempLabels]=useState([])
    const [humidityLabels,setHumidityLabels]=useState([])
    const [windLabels,setWindLabels]=useState([])
    const [startDate,setStartDate]=useState("2018-01-01")
    const [endDate,setEndDate]=useState("2019-01-01")
    const [startDateUrl,setStartDateUrl]=useState(null)
    const [endDateUrl,setEndDateUrl]=useState(null)
    
    const [loading,setLoading]=useState(true)
    const [dataClicked,setDataClicked]=useState(false)

    const sunChart = {
        labels: sunLabels,
        datasets: [
            {
            label: 'Sunlight Data',
            lineTension: 0.5,
            backgroundColor: '#ffb74d80',
            fill:true,
            borderColor: '#f57c00',
            borderWidth: 1.5,
            pointRadius:0,
            pointBorderWidth:0,
            data: data,
            
            }
        ]
    }
    const humidityChart = {
        labels: humidityLabels,
        datasets: [
            {
            label: 'Humidity Data',
            lineTension: 0.5,
            backgroundColor: '#ffb74d80',
            fill:true,
            borderColor: '#f57c00',
            borderWidth: 1.5,
            pointRadius:0,
            pointBorderWidth:0,
            data:humidityData,
            
            }
        ]
    }
   
    const rainChart = {
        labels: rainLabels,
        datasets: [
            {
            label: 'Rain Data',
            lineTension: 0.5,
            backgroundColor: '#ffb74d80',
            fill:true,
            borderColor: '#f57c00',
            borderWidth: 1.5,
            pointRadius:0,
            pointBorderWidth:0,
            data: rainData,
            
            }
        ]
    }
   
    const windChart = {
        labels: windLabels,
        datasets: [
            {
            label: 'Wind Data',
            lineTension: 0.5,
            backgroundColor: '#ffb74d80',
            fill:true,
            borderColor: '#f57c00',
            borderWidth: 1.5,
            pointRadius:0,
            pointBorderWidth:0,
            data: windData,
            
            }
        ]
    }
    const tempChart = {
        labels: tempLabels,
        datasets: [
            {
            label: 'Temperature Data',
            lineTension: 0.5,
            backgroundColor: '#ffb74d80',
            fill:true,
            borderColor: '#f57c00',
            borderWidth: 1.5,
            pointRadius:0,
            pointBorderWidth:0,
            data: tempData,
            
            }
        ]
    }
   
   
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
    function getMonthlyUnits(num){
        let units=num*30
        units=units.toFixed(2)
        return units
    }

    const getData=()=>{
        let start = parseInt(startDate.replaceAll("-",""))
        let end = parseInt(endDate.replaceAll("-",""))
        // console.log(startDate)
        console.log("start",start)
        setStartDateUrl(start)
        setEndDateUrl(end)
        
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/daily/point?parameters=ALLSKY_SFC_SW_DWN,T2M,RH2M,PRECTOTCORR,WS10M&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=${startDateUrl}&end=${endDateUrl}`
        console.log(url)
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
            console.log(data)
            let allSky=data.properties.parameter.ALLSKY_SFC_SW_DWN
            let values = Object.values(allSky)
            let keys = Object.keys(allSky)

            let rain=data.properties.parameter.PRECTOTCORR
            let rainValues = Object.values(rain)
            let rainKeys = Object.keys(rain)
   
            let humidity=data.properties.parameter.PRECTOTCORR
            let humidityValues = Object.values(humidity)
            let humidityKeys = Object.keys(humidity)

            let temp=data.properties.parameter.PRECTOTCORR
            let tempValues = Object.values(temp)
            let tempKeys = Object.keys(temp)

            let wind=data.properties.parameter.PRECTOTCORR
            let windValues = Object.values(wind)
            let windKeys = Object.keys(wind)
            //data.properties.parameter.ALLSKY_SFC_SW_DWN
            setData(values)
            setRainData(rainValues)
            setWindData(windValues)
            setTempData(tempValues)
            setHumidityData(humidityValues)
            setSunLabels(keys)
            setRainLabels(rainKeys)
            setTempLabels(tempKeys)
            setHumidityLabels(humidityKeys)
            setWindLabels(windKeys)
            
            setLoading(false)
        })
        .catch((e)=>{console.log(e)})

    }
    
    useEffect(()=>{
        let start = parseInt(startDate.replaceAll("-",""))
        let end = parseInt(endDate.replaceAll("-",""))
        // console.log(startDate)
        console.log("start",start)
        setStartDateUrl(start)
        setEndDateUrl(end)
        getData()
    }, [])

    const startDateChange=(e)=>{
        setStartDate(e.target.value)
        console.log(startDate)
    }
    const endDateChange=(e)=>{
        setEndDate(e.target.value)
        console.log(endDate)
    }
    return (
        <Box sx={{backgroundColor:"#f4f4f4",marginTop:"7vh",width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
            {/*Sunlight* */}
            <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                <Typography variant="h5" color="primary" fontFamily="Bree Serif" marginBottom="1vh" sx={{textAlign:"center"}}>Choose the date range</Typography>
                <TextField onChange={startDateChange} label="Starting Date" type="date" value={startDate}/>
                <TextField onChange={endDateChange} label="Ending Date" type="date" value={endDate} />
                <Button onClick={()=>{
                
                    setDataClicked(!dataClicked)
                    setLoading(true)
                    getData()
                }}>Get Data</Button>
                
            </Paper>
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>Sunlight</Typography>
                    </Box>
                    <Line className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={sunChart}
                    options={{
                        title:{text:'Cases'},
                        maintainAspectRatio:true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display:true,
                                },
                                ticks:{
                                    maxTicksLimit:3,
                                    display:false
                                },
                            }],
                            yAxes: [{
                                gridLines: {
                                    display:false
                                },
                                ticks:{
                                    maxTicksLimit:3,
                                    display:false
                                },   
                            }]
                        },
                        plugins: {
                            legend: {
                            display: false
                            }
                        }
                    }}

                    />
                </Paper>
            }
            {/*Temprature* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>Temperature</Typography>
                    </Box>
                    <Line className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={tempChart}
                    options={{
                        title:{text:'Cases'},
                        maintainAspectRatio:true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display:true,
                                },
                                ticks:{
                                    maxTicksLimit:3,
                                    display:false
                                },
                            }],
                            yAxes: [{
                                gridLines: {
                                    display:false
                                },
                                ticks:{
                                    maxTicksLimit:3,
                                    display:false
                                },   
                            }]
                        }
                    }}

                    />
                </Paper>
            }
            {/*Rain* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>Rain</Typography>
                    </Box>
                    <Line className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={rainChart}
                    options={{
                        title:{text:'Cases'},
                        maintainAspectRatio:true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display:true,
                                },
                                ticks:{
                                    maxTicksLimit:3,
                                    display:false
                                },
                            }],
                            yAxes: [{
                                gridLines: {
                                    display:false
                                },
                                ticks:{
                                    maxTicksLimit:3,
                                    display:false
                                },   
                            }]
                        }
                    }}

                    />
                </Paper>
            }
           
            {/*Humidity* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>Humidity</Typography>
                    </Box>
                    <Line className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={humidityChart}
                    options={{
                        title:{text:'Cases'},
                        maintainAspectRatio:true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display:true,
                                },
                                ticks:{
                                    maxTicksLimit:3,
                                    display:false
                                },
                            }],
                            yAxes: [{
                                gridLines: {
                                    display:false
                                },
                                ticks:{
                                    maxTicksLimit:3,
                                    display:false
                                },   
                            }]
                        }
                    }}

                    />
                </Paper>
            }
           
            {/*Wind* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>Wind</Typography>
                    </Box>
                    <Line className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={windChart}
                    options={{
                        title:{text:'Cases'},
                        maintainAspectRatio:true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display:true,
                                },
                                ticks:{
                                    maxTicksLimit:3,
                                    display:false
                                },
                            }],
                            yAxes: [{
                                gridLines: {
                                    display:false
                                },
                                ticks:{
                                    maxTicksLimit:3,
                                    display:false
                                },   
                            }]
                        }
                    }}

                    />
                </Paper>
            }
           
            {loading && <Box sx={{height:"93vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><CircularProgress color="primary"/><Typography fontFamily="Bree Serif" sx={{fontSize:"20px"}} color="primary">Loading Custom Data</Typography></Box>}
        </Box>
    )
}
