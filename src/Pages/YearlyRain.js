import React,{useState,useEffect} from 'react'
import {Box, Typography,Paper, CircularProgress} from '@mui/material'
import {Bar} from 'react-chartjs-2'

export default function YearlyRain({lat,lng}) {
    const [monthlyData,setMonthlyData]=useState([])
    const [monthlyData2021,setMonthlyData2021]=useState([])
    const [monthlyData2020,setMonthlyData2020]=useState([])
    const [monthlyData2019,setMonthlyData2019]=useState([])
    const [monthlyData2018,setMonthlyData2018]=useState([])
    const [monthlyData2017,setMonthlyData2017]=useState([])
    const [monthlyData2016,setMonthlyData2016]=useState([])
    const [loading,setLoading]=useState(true)

    const monthlyLabels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const monthlyDataChart2020 = {
        labels: monthlyLabels,
        datasets: [
            {
            label: 'Monthly Data',
            lineTension: 0.5,
            backgroundColor: '#ffb74d80',
            fill:true,
            borderColor: '#f57c00',
            borderWidth: 1.5,
            pointRadius:0,
            pointBorderWidth:0,
            data: monthlyData2020,
            
            }
        ]
    }
    const monthlyDataChart2019 = {
        labels: monthlyLabels,
        datasets: [
            {
            label: 'Monthly Data',
            lineTension: 0.5,
            backgroundColor: '#ffb74d80',
            fill:true,
            borderColor: '#f57c00',
            borderWidth: 1.5,
            pointRadius:0,
            pointBorderWidth:0,
            data: monthlyData2019,
            
            }
        ]
    }
    const monthlyDataChart2018 = {
        labels: monthlyLabels,
        datasets: [
            {
            label: 'Monthly Data',
            lineTension: 0.5,
            backgroundColor: '#ffb74d80',
            fill:true,
            borderColor: '#f57c00',
            borderWidth: 1.5,
            pointRadius:0,
            pointBorderWidth:0,
            data: monthlyData2018,
            
            }
        ]
    }
    const monthlyDataChart2017 = {
        labels: monthlyLabels,
        datasets: [
            {
            label: 'Monthly Data',
            lineTension: 0.5,
            backgroundColor: '#ffb74d80',
            fill:true,
            borderColor: '#f57c00',
            borderWidth: 1.5,
            pointRadius:0,
            pointBorderWidth:0,
            data: monthlyData2017,
            
            }
        ]
    }
    const monthlyDataChart2016 = {
        labels: monthlyLabels,
        datasets: [
            {
            label: 'Monthly Data',
            lineTension: 0.5,
            backgroundColor: '#ffb74d80',
            fill:true,
            borderColor: '#f57c00',
            borderWidth: 1.5,
            pointRadius:0,
            pointBorderWidth:0,
            data: monthlyData2016,
            
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
    function getYearlyUnits(num){
        let units=num*365
        units=units.toFixed(2)
        return units
    }
    const MonthlyData=()=>{
        setLoading(true)
        MonthlyData2020()
        MonthlyData2019()
        MonthlyData2018()
        MonthlyData2017()
        MonthlyData2016()
       
        
    }

    const MonthlyData2020=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=PRECTOTCORR,CLRSKY_SFC_SW_DWN&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2020&end=2020`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          setMonthlyData2020(keys)
        })
        .catch((e)=>{console.log(e)})
    }
    const MonthlyData2019=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=PRECTOTCORR,CLRSKY_SFC_SW_DWN&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2019&end=2019`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          setMonthlyData2019(keys)
        })
        .catch((e)=>{console.log(e)})
    }
   
    const MonthlyData2018=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=PRECTOTCORR,CLRSKY_SFC_SW_DWN&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2018&end=2018`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          setMonthlyData2018(keys)
        })
        .catch((e)=>{console.log(e)})
    }
    const MonthlyData2017=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=PRECTOTCORR,CLRSKY_SFC_SW_DWN&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2017&end=2017`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          setMonthlyData2017(keys)
        })
        .catch((e)=>{console.log(e)})
    }
    const MonthlyData2016=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=PRECTOTCORR,CLRSKY_SFC_SW_DWN&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2016&end=2016`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          setMonthlyData2016(keys)
          setLoading(false)
        })
        .catch((e)=>{console.log(e)})
    }
   
   
    useEffect(()=>{
      MonthlyData()
    }, [])

    const removeDecimal =(num)=>{
        console.log(num)
        let removed=parseFloat(num)
        removed=removed.toFixed(2)
        return removed
    }
    return (
        <Box sx={{backgroundColor:"#f4f4f4",marginTop:"7vh",width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
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
            {/**Detail */}
            <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                <Box>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px",textAlign:"center"}}>Welcome to monthly historical rain data</Typography>
                    <Typography fontFamily="Bree Serif" sx={{fontSize:"15px"}}>In this page you can get the amount of average rain in a particular year. We use a 12 month period to gather the average so you can get an idea how much rain you can expect.</Typography>
                    <Box component="img" src={require("../Assets/Rain.png").default} sx={{marginTop:"5vh", width:{xs:"90vw",md:"70vw"}}}></Box>
                </Box>
            </Paper>
            {/*2020* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>2020</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(monthlyData2020)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated rain that year : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getYearlyUnits(getAvg(monthlyData2020))} mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={monthlyDataChart2020}
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
            {/**2019 */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                <Box>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>2019</Typography>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                    <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(monthlyData2019)} mm</Typography>

                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated rain that year : </Typography>
                    <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getYearlyUnits(getAvg(monthlyData2019))} mm</Typography>
                </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={monthlyDataChart2019}
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
            {/**2018 */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>2018</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(monthlyData2018)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated rain that year : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getYearlyUnits(getAvg(monthlyData2018))} mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={monthlyDataChart2018}
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
            {/**2017 */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>2017</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(monthlyData2017)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated rain that year : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getYearlyUnits(getAvg(monthlyData2017))} mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={monthlyDataChart2017}
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
            {/**2016 */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>2016</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(monthlyData2016)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated rain that year : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getYearlyUnits(getAvg(monthlyData2016))} mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={monthlyDataChart2016}
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
            {loading && <Box sx={{height:"93vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><CircularProgress color="primary"/><Typography fontFamily="Bree Serif" sx={{fontSize:"20px"}} color="primary">Loading Yearly Data</Typography></Box>}
        </Box>
    )
}
