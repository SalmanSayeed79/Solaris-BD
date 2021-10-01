import React,{useState,useEffect} from 'react'
import {Box, Typography,Paper, CircularProgress} from '@mui/material'
import {Bar} from 'react-chartjs-2'

export default function MonthlyRain({lat,lng}) {
    const [monthlyData,setMonthlyData]=useState([])
    
    const [janData,setJanData]=useState([])
    const [febData,setFebData]=useState([])
    const [marData,setMarData]=useState([])
    const [aprData,setAprData]=useState([])
    const [mayData,setMayData]=useState([])
    const [junData,setJunData]=useState([])
    const [julData,setJulData]=useState([])
    const [augData,setAugData]=useState([])
    const [sepData,setSepData]=useState([])
    const [octData,setOctData]=useState([])
    const [novData,setNovData]=useState([])
    const [decData,setDecData]=useState([])
    const [loading,setLoading]=useState(true)

    const monthlyLabels=["2020","2019","2018","2017","2016"]
    const janChart = {
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
            data: janData,
            
            }
        ]
    }
    const febChart = {
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
            data: febData,
            
            }
        ]
    }
    const marChart = {
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
            data: marData,
            
            }
        ]
    }
    const aprChart = {
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
            data: aprData,
            
            }
        ]
    }
    const mayChart = {
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
            data: mayData,
            
            }
        ]
    }

    const junChart = {
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
            data: junData,
            
            }
        ]
    }
    const julChart = {
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
            data: julData,
            
            }
        ]
    }
    const augChart = {
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
            data: augData,
            
            }
        ]
    }
    const sepChart = {
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
            data: sepData,
            
            }
        ]
    }
    const octChart = {
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
            data: octData,
            
            }
        ]
    }
    const novChart = {
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
            data: novData,
            
            }
        ]
    }
    const decChart = {
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
            data: decData,
            
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
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=PRECTOTCORR&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2020&end=2020`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          console.log("keys",keys[0])
          setJanData(prev=>[...prev,keys[0]])
          setFebData(prev=>[...prev,keys[1]])
          setMarData(prev=>[...prev,keys[2]])
          setAprData(prev=>[...prev,keys[3]])
          setMayData(prev=>[...prev,keys[4]])
          setJunData(prev=>[...prev,keys[5]])
          setJulData(prev=>[...prev,keys[6]])
          setAugData(prev=>[...prev,keys[7]])
          setSepData(prev=>[...prev,keys[8]])
          setOctData(prev=>[...prev,keys[9]])
          setNovData(prev=>[...prev,keys[10]])
          setDecData(prev=>[...prev,keys[11]])
        }).then(()=>{getData2019()})
        .catch((e)=>{console.log(e)})

    }
    const getData2019=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=PRECTOTCORR&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2019&end=2019`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          setJanData(prev=>[...prev,keys[0]])
          setFebData(prev=>[...prev,keys[1]])
          setMarData(prev=>[...prev,keys[2]])
          setAprData(prev=>[...prev,keys[3]])
          setMayData(prev=>[...prev,keys[4]])
          setJunData(prev=>[...prev,keys[5]])
          setJulData(prev=>[...prev,keys[6]])
          setAugData(prev=>[...prev,keys[7]])
          setSepData(prev=>[...prev,keys[8]])
          setOctData(prev=>[...prev,keys[9]])
          setNovData(prev=>[...prev,keys[10]])
          setDecData(prev=>[...prev,keys[11]])
        }).then(()=>{getData2018()})
        .catch((e)=>{console.log(e)})
    }
   
    const getData2018=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=PRECTOTCORR&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2018&end=2018`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          setJanData(prev=>[...prev,keys[0]])
          setFebData(prev=>[...prev,keys[1]])
          setMarData(prev=>[...prev,keys[2]])
          setAprData(prev=>[...prev,keys[3]])
          setMayData(prev=>[...prev,keys[4]])
          setJunData(prev=>[...prev,keys[5]])
          setJulData(prev=>[...prev,keys[6]])
          setAugData(prev=>[...prev,keys[7]])
          setSepData(prev=>[...prev,keys[8]])
          setOctData(prev=>[...prev,keys[9]])
          setNovData(prev=>[...prev,keys[10]])
          setDecData(prev=>[...prev,keys[11]])
        }).then(()=>{getData2017()})
        .catch((e)=>{console.log(e)})
    }
    const getData2017=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=PRECTOTCORR&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2017&end=2017`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          setJanData(prev=>[...prev,keys[0]])
          setFebData(prev=>[...prev,keys[1]])
          setMarData(prev=>[...prev,keys[2]])
          setAprData(prev=>[...prev,keys[3]])
          setMayData(prev=>[...prev,keys[4]])
          setJunData(prev=>[...prev,keys[5]])
          setJulData(prev=>[...prev,keys[6]])
          setAugData(prev=>[...prev,keys[7]])
          setSepData(prev=>[...prev,keys[8]])
          setOctData(prev=>[...prev,keys[9]])
          setNovData(prev=>[...prev,keys[10]])
          setDecData(prev=>[...prev,keys[11]])
        }).then(()=>{getData2016()})
        .catch((e)=>{console.log(e)})
    }
    const getData2016=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=PRECTOTCORR&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2016&end=2016`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          setJanData(prev=>[...prev,keys[0]])
          setFebData(prev=>[...prev,keys[1]])
          setMarData(prev=>[...prev,keys[2]])
          setAprData(prev=>[...prev,keys[3]])
          setMayData(prev=>[...prev,keys[4]])
          setJunData(prev=>[...prev,keys[5]])
          setJulData(prev=>[...prev,keys[6]])
          setAugData(prev=>[...prev,keys[7]])
          setSepData(prev=>[...prev,keys[8]])
          setOctData(prev=>[...prev,keys[9]])
          setNovData(prev=>[...prev,keys[10]])
          setDecData(prev=>[...prev,keys[11]])
          setLoading(false)
        })
        .catch((e)=>{console.log(e)})
    }
   
   
   
    useEffect(()=>{
        getData()
    }, [])



    return (
        <Box sx={{backgroundColor:"#f4f4f4",marginTop:"7vh",width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
            {/*January* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>January</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rainfall per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(janData)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month: </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(janData))}mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={janChart}
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
            {/**February */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                <Box>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>February</Typography>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rainfall per day (mm) : </Typography>
                    <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(febData)} mm</Typography>

                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month : </Typography>
                    <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(febData))}mm</Typography>
                </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={febChart}
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
            {/**March */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>March</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(marData)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(marData))}mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={marChart}
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
            {/**April */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>April</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rainfall per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(aprData)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(aprData))}mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={aprChart}
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
            {/**May */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>May</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rainfall per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(mayData)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(mayData))}mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={mayChart}
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
            {/**June */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>June</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rainfall per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(junData)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(junData))}mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={junChart}
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
            {/**July */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>July</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rainfall per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(julData)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(julData))}mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={julChart}
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
            {/**August */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>August</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rainfall per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(augData)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(augData))}mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={augChart}
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
            {/**September */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>September</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rainfall per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(sepData)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(sepData))}mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={sepChart}
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
            {/**October */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>October</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rainfall per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(octData)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(octData))}mm</Typography>
                    </Box>octData
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={octChart}
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
            {/**November */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>November</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rainfall per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(novData)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(novData))}mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={novChart}
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
            {/**December */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Box>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px"}}>December</Typography>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rainfall per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getAvg(decData)} mm</Typography>

                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Estimated total rainfall this month : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>{getMonthlyUnits(getAvg(decData))}mm</Typography>
                    </Box>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"70vw" }}
                    data={decChart}
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
            {loading && <Box sx={{height:"93vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><CircularProgress color="primary"/><Typography fontFamily="Bree Serif" sx={{fontSize:"20px"}} color="primary">Loading Monthly Data</Typography></Box>}
        </Box>
    )
}
