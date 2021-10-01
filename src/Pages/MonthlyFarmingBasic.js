import React,{useState,useEffect} from 'react'
import {Box, Typography,Paper, CircularProgress,ButtonGroup,Button} from '@mui/material'
import {Bar} from 'react-chartjs-2'

export default function MonthlyFarmingBasic({lat,lng}) {
    const [monthlyData,setMonthlyData]=useState([])
    
    const [janRainData,setJanRainData]=useState([])
    const [febRainData,setFebRainData]=useState([])
    const [marRainData,setMarRainData]=useState([])
    const [aprRainData,setAprRainData]=useState([])
    const [mayRainData,setMayRainData]=useState([])
    const [junRainData,setJunRainData]=useState([])
    const [julRainData,setJulRainData]=useState([])
    const [augRainData,setAugRainData]=useState([])
    const [sepRainData,setSepRainData]=useState([])
    const [octRainData,setOctRainData]=useState([])
    const [novRainData,setNovRainData]=useState([])
    const [decRainData,setDecRainData]=useState([])

    const [janWindData,setJanWindData]=useState([])
    const [febWindData,setFebWindData]=useState([])
    const [marWindData,setMarWindData]=useState([])
    const [aprWindData,setAprWindData]=useState([])
    const [mayWindData,setMayWindData]=useState([])
    const [junWindData,setJunWindData]=useState([])
    const [julWindData,setJulWindData]=useState([])
    const [augWindData,setAugWindData]=useState([])
    const [sepWindData,setSepWindData]=useState([])
    const [octWindData,setOctWindData]=useState([])
    const [novWindData,setNovWindData]=useState([])
    const [decWindData,setDecWindData]=useState([])

    const [janTempData,setJanTempData]=useState([])
    const [febTempData,setFebTempData]=useState([])
    const [marTempData,setMarTempData]=useState([])
    const [aprTempData,setAprTempData]=useState([])
    const [mayTempData,setMayTempData]=useState([])
    const [junTempData,setJunTempData]=useState([])
    const [julTempData,setJulTempData]=useState([])
    const [augTempData,setAugTempData]=useState([])
    const [sepTempData,setSepTempData]=useState([])
    const [octTempData,setOctTempData]=useState([])
    const [novTempData,setNovTempData]=useState([])
    const [decTempData,setDecTempData]=useState([])

    const [janHumidityData,setJanHumidityData]=useState([])
    const [febHumidityData,setFebHumidityData]=useState([])
    const [marHumidityData,setMarHumidityData]=useState([])
    const [aprHumidityData,setAprHumidityData]=useState([])
    const [mayHumidityData,setMayHumidityData]=useState([])
    const [junHumidityData,setJunHumidityData]=useState([])
    const [julHumidityData,setJulHumidityData]=useState([])
    const [augHumidityData,setAugHumidityData]=useState([])
    const [sepHumidityData,setSepHumidityData]=useState([])
    const [octHumidityData,setOctHumidityData]=useState([])
    const [novHumidityData,setNovHumidityData]=useState([])
    const [decHumidityData,setDecHumidityData]=useState([])

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
    function getMonthlyUnits(num){
        let units=num*30
        units=units.toFixed(2)
        return units
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
    const getData=()=>{
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
            
          console.log("keys",tempKeys[0])
          setJanRainData(prev=>[...prev,rainKeys[0]])
          setFebRainData(prev=>[...prev,rainKeys[1]])
          setMarRainData(prev=>[...prev,rainKeys[2]])
          setAprRainData(prev=>[...prev,rainKeys[3]])
          setMayRainData(prev=>[...prev,rainKeys[4]])
          setJunRainData(prev=>[...prev,rainKeys[5]])
          setJulRainData(prev=>[...prev,rainKeys[6]])
          setAugRainData(prev=>[...prev,rainKeys[7]])
          setSepRainData(prev=>[...prev,rainKeys[8]])
          setOctRainData(prev=>[...prev,rainKeys[9]])
          setNovRainData(prev=>[...prev,rainKeys[10]])
          setDecRainData(prev=>[...prev,rainKeys[11]])

          setJanTempData(prev=>[...prev,tempKeys[0]])
          setFebTempData(prev=>[...prev,tempKeys[1]])
          setMarTempData(prev=>[...prev,tempKeys[2]])
          setAprTempData(prev=>[...prev,tempKeys[3]])
          setMayTempData(prev=>[...prev,tempKeys[4]])
          setJunTempData(prev=>[...prev,tempKeys[5]])
          setJulTempData(prev=>[...prev,tempKeys[6]])
          setAugTempData(prev=>[...prev,tempKeys[7]])
          setSepTempData(prev=>[...prev,tempKeys[8]])
          setOctTempData(prev=>[...prev,tempKeys[9]])
          setNovTempData(prev=>[...prev,tempKeys[10]])
          setDecTempData(prev=>[...prev,tempKeys[11]])

          setJanWindData(prev=>[...prev,windKeys[0]])
          setFebWindData(prev=>[...prev,windKeys[1]])
          setMarWindData(prev=>[...prev,windKeys[2]])
          setAprWindData(prev=>[...prev,windKeys[3]])
          setMayWindData(prev=>[...prev,windKeys[4]])
          setJunWindData(prev=>[...prev,windKeys[5]])
          setJulWindData(prev=>[...prev,windKeys[6]])
          setAugWindData(prev=>[...prev,windKeys[7]])
          setSepWindData(prev=>[...prev,windKeys[8]])
          setOctWindData(prev=>[...prev,windKeys[9]])
          setNovWindData(prev=>[...prev,windKeys[10]])
          setDecWindData(prev=>[...prev,windKeys[11]])

          setJanHumidityData(prev=>[...prev,humidityKeys[0]])
          setFebHumidityData(prev=>[...prev,humidityKeys[1]])
          setMarHumidityData(prev=>[...prev,humidityKeys[2]])
          setAprHumidityData(prev=>[...prev,humidityKeys[3]])
          setMayHumidityData(prev=>[...prev,humidityKeys[4]])
          setJunHumidityData(prev=>[...prev,humidityKeys[5]])
          setJulHumidityData(prev=>[...prev,humidityKeys[6]])
          setAugHumidityData(prev=>[...prev,humidityKeys[7]])
          setSepHumidityData(prev=>[...prev,humidityKeys[8]])
          setOctHumidityData(prev=>[...prev,humidityKeys[9]])
          setNovHumidityData(prev=>[...prev,humidityKeys[10]])
          setDecHumidityData(prev=>[...prev,humidityKeys[11]])
        }).then(()=>{getData2019()})
        .catch((e)=>{console.log(e)})

    }
    const getData2019=()=>{
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
            
          console.log("keys",tempKeys[0])
          setJanRainData(prev=>[...prev,rainKeys[0]])
          setFebRainData(prev=>[...prev,rainKeys[1]])
          setMarRainData(prev=>[...prev,rainKeys[2]])
          setAprRainData(prev=>[...prev,rainKeys[3]])
          setMayRainData(prev=>[...prev,rainKeys[4]])
          setJunRainData(prev=>[...prev,rainKeys[5]])
          setJulRainData(prev=>[...prev,rainKeys[6]])
          setAugRainData(prev=>[...prev,rainKeys[7]])
          setSepRainData(prev=>[...prev,rainKeys[8]])
          setOctRainData(prev=>[...prev,rainKeys[9]])
          setNovRainData(prev=>[...prev,rainKeys[10]])
          setDecRainData(prev=>[...prev,rainKeys[11]])

          setJanTempData(prev=>[...prev,tempKeys[0]])
          setFebTempData(prev=>[...prev,tempKeys[1]])
          setMarTempData(prev=>[...prev,tempKeys[2]])
          setAprTempData(prev=>[...prev,tempKeys[3]])
          setMayTempData(prev=>[...prev,tempKeys[4]])
          setJunTempData(prev=>[...prev,tempKeys[5]])
          setJulTempData(prev=>[...prev,tempKeys[6]])
          setAugTempData(prev=>[...prev,tempKeys[7]])
          setSepTempData(prev=>[...prev,tempKeys[8]])
          setOctTempData(prev=>[...prev,tempKeys[9]])
          setNovTempData(prev=>[...prev,tempKeys[10]])
          setDecTempData(prev=>[...prev,tempKeys[11]])

          setJanWindData(prev=>[...prev,windKeys[0]])
          setFebWindData(prev=>[...prev,windKeys[1]])
          setMarWindData(prev=>[...prev,windKeys[2]])
          setAprWindData(prev=>[...prev,windKeys[3]])
          setMayWindData(prev=>[...prev,windKeys[4]])
          setJunWindData(prev=>[...prev,windKeys[5]])
          setJulWindData(prev=>[...prev,windKeys[6]])
          setAugWindData(prev=>[...prev,windKeys[7]])
          setSepWindData(prev=>[...prev,windKeys[8]])
          setOctWindData(prev=>[...prev,windKeys[9]])
          setNovWindData(prev=>[...prev,windKeys[10]])
          setDecWindData(prev=>[...prev,windKeys[11]])

          setJanHumidityData(prev=>[...prev,humidityKeys[0]])
          setFebHumidityData(prev=>[...prev,humidityKeys[1]])
          setMarHumidityData(prev=>[...prev,humidityKeys[2]])
          setAprHumidityData(prev=>[...prev,humidityKeys[3]])
          setMayHumidityData(prev=>[...prev,humidityKeys[4]])
          setJunHumidityData(prev=>[...prev,humidityKeys[5]])
          setJulHumidityData(prev=>[...prev,humidityKeys[6]])
          setAugHumidityData(prev=>[...prev,humidityKeys[7]])
          setSepHumidityData(prev=>[...prev,humidityKeys[8]])
          setOctHumidityData(prev=>[...prev,humidityKeys[9]])
          setNovHumidityData(prev=>[...prev,humidityKeys[10]])
          setDecHumidityData(prev=>[...prev,humidityKeys[11]])
        }).then(()=>{getData2018()})
        .catch((e)=>{console.log(e)})
    }
   
    const getData2018=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=T2M,RH2M,PRECTOTCORR,WS10M&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2018&end=2018`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          let temp=data.properties.parameter.T2M
            let humidity=data.properties.parameter.RH2M
            let rain=data.properties.parameter.PRECTOTCORR
            let wind=data.properties.parameter.WS10M
            let tempKeys = Object.values(temp)
            let humidityKeys = Object.values(humidity)
            let rainKeys = Object.values(rain)
            let windKeys = Object.values(wind)
            
          console.log("keys",tempKeys[0])
          setJanRainData(prev=>[...prev,rainKeys[0]])
          setFebRainData(prev=>[...prev,rainKeys[1]])
          setMarRainData(prev=>[...prev,rainKeys[2]])
          setAprRainData(prev=>[...prev,rainKeys[3]])
          setMayRainData(prev=>[...prev,rainKeys[4]])
          setJunRainData(prev=>[...prev,rainKeys[5]])
          setJulRainData(prev=>[...prev,rainKeys[6]])
          setAugRainData(prev=>[...prev,rainKeys[7]])
          setSepRainData(prev=>[...prev,rainKeys[8]])
          setOctRainData(prev=>[...prev,rainKeys[9]])
          setNovRainData(prev=>[...prev,rainKeys[10]])
          setDecRainData(prev=>[...prev,rainKeys[11]])

          setJanTempData(prev=>[...prev,tempKeys[0]])
          setFebTempData(prev=>[...prev,tempKeys[1]])
          setMarTempData(prev=>[...prev,tempKeys[2]])
          setAprTempData(prev=>[...prev,tempKeys[3]])
          setMayTempData(prev=>[...prev,tempKeys[4]])
          setJunTempData(prev=>[...prev,tempKeys[5]])
          setJulTempData(prev=>[...prev,tempKeys[6]])
          setAugTempData(prev=>[...prev,tempKeys[7]])
          setSepTempData(prev=>[...prev,tempKeys[8]])
          setOctTempData(prev=>[...prev,tempKeys[9]])
          setNovTempData(prev=>[...prev,tempKeys[10]])
          setDecTempData(prev=>[...prev,tempKeys[11]])

          setJanWindData(prev=>[...prev,windKeys[0]])
          setFebWindData(prev=>[...prev,windKeys[1]])
          setMarWindData(prev=>[...prev,windKeys[2]])
          setAprWindData(prev=>[...prev,windKeys[3]])
          setMayWindData(prev=>[...prev,windKeys[4]])
          setJunWindData(prev=>[...prev,windKeys[5]])
          setJulWindData(prev=>[...prev,windKeys[6]])
          setAugWindData(prev=>[...prev,windKeys[7]])
          setSepWindData(prev=>[...prev,windKeys[8]])
          setOctWindData(prev=>[...prev,windKeys[9]])
          setNovWindData(prev=>[...prev,windKeys[10]])
          setDecWindData(prev=>[...prev,windKeys[11]])

          setJanHumidityData(prev=>[...prev,humidityKeys[0]])
          setFebHumidityData(prev=>[...prev,humidityKeys[1]])
          setMarHumidityData(prev=>[...prev,humidityKeys[2]])
          setAprHumidityData(prev=>[...prev,humidityKeys[3]])
          setMayHumidityData(prev=>[...prev,humidityKeys[4]])
          setJunHumidityData(prev=>[...prev,humidityKeys[5]])
          setJulHumidityData(prev=>[...prev,humidityKeys[6]])
          setAugHumidityData(prev=>[...prev,humidityKeys[7]])
          setSepHumidityData(prev=>[...prev,humidityKeys[8]])
          setOctHumidityData(prev=>[...prev,humidityKeys[9]])
          setNovHumidityData(prev=>[...prev,humidityKeys[10]])
          setDecHumidityData(prev=>[...prev,humidityKeys[11]])
        }).then(()=>{getData2017()})
        .catch((e)=>{console.log(e)})
    }
    const getData2017=()=>{
        const url=`https://rafeedbhuiyan17.pythonanywhere.com/api/temporal/monthly/point?parameters=T2M,RH2M,PRECTOTCORR,WS10M&community=RE&longitude=${lng}&latitude=${lat}&format=JSON&start=2017&end=2017`
        setLoading(true)
        fetch (url).then(res=>res.json())
        .then(data=>{
          let allSky=data.properties.parameter.PRECTOTCORR
          let keys = Object.values(allSky)
          let temp=data.properties.parameter.T2M
            let humidity=data.properties.parameter.RH2M
            let rain=data.properties.parameter.PRECTOTCORR
            let wind=data.properties.parameter.WS10M
            let tempKeys = Object.values(temp)
            let humidityKeys = Object.values(humidity)
            let rainKeys = Object.values(rain)
            let windKeys = Object.values(wind)
            
          console.log("keys",tempKeys[0])
          setJanRainData(prev=>[...prev,rainKeys[0]])
          setFebRainData(prev=>[...prev,rainKeys[1]])
          setMarRainData(prev=>[...prev,rainKeys[2]])
          setAprRainData(prev=>[...prev,rainKeys[3]])
          setMayRainData(prev=>[...prev,rainKeys[4]])
          setJunRainData(prev=>[...prev,rainKeys[5]])
          setJulRainData(prev=>[...prev,rainKeys[6]])
          setAugRainData(prev=>[...prev,rainKeys[7]])
          setSepRainData(prev=>[...prev,rainKeys[8]])
          setOctRainData(prev=>[...prev,rainKeys[9]])
          setNovRainData(prev=>[...prev,rainKeys[10]])
          setDecRainData(prev=>[...prev,rainKeys[11]])

          setJanTempData(prev=>[...prev,tempKeys[0]])
          setFebTempData(prev=>[...prev,tempKeys[1]])
          setMarTempData(prev=>[...prev,tempKeys[2]])
          setAprTempData(prev=>[...prev,tempKeys[3]])
          setMayTempData(prev=>[...prev,tempKeys[4]])
          setJunTempData(prev=>[...prev,tempKeys[5]])
          setJulTempData(prev=>[...prev,tempKeys[6]])
          setAugTempData(prev=>[...prev,tempKeys[7]])
          setSepTempData(prev=>[...prev,tempKeys[8]])
          setOctTempData(prev=>[...prev,tempKeys[9]])
          setNovTempData(prev=>[...prev,tempKeys[10]])
          setDecTempData(prev=>[...prev,tempKeys[11]])

          setJanWindData(prev=>[...prev,windKeys[0]])
          setFebWindData(prev=>[...prev,windKeys[1]])
          setMarWindData(prev=>[...prev,windKeys[2]])
          setAprWindData(prev=>[...prev,windKeys[3]])
          setMayWindData(prev=>[...prev,windKeys[4]])
          setJunWindData(prev=>[...prev,windKeys[5]])
          setJulWindData(prev=>[...prev,windKeys[6]])
          setAugWindData(prev=>[...prev,windKeys[7]])
          setSepWindData(prev=>[...prev,windKeys[8]])
          setOctWindData(prev=>[...prev,windKeys[9]])
          setNovWindData(prev=>[...prev,windKeys[10]])
          setDecWindData(prev=>[...prev,windKeys[11]])

          setJanHumidityData(prev=>[...prev,humidityKeys[0]])
          setFebHumidityData(prev=>[...prev,humidityKeys[1]])
          setMarHumidityData(prev=>[...prev,humidityKeys[2]])
          setAprHumidityData(prev=>[...prev,humidityKeys[3]])
          setMayHumidityData(prev=>[...prev,humidityKeys[4]])
          setJunHumidityData(prev=>[...prev,humidityKeys[5]])
          setJulHumidityData(prev=>[...prev,humidityKeys[6]])
          setAugHumidityData(prev=>[...prev,humidityKeys[7]])
          setSepHumidityData(prev=>[...prev,humidityKeys[8]])
          setOctHumidityData(prev=>[...prev,humidityKeys[9]])
          setNovHumidityData(prev=>[...prev,humidityKeys[10]])
          setDecHumidityData(prev=>[...prev,humidityKeys[11]])
        }).then(()=>{getData2016()})
        .catch((e)=>{console.log(e)})
    }
    const getData2016=()=>{
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
            
          console.log("keys",tempKeys[0])
          setJanRainData(prev=>[...prev,rainKeys[0]])
          setFebRainData(prev=>[...prev,rainKeys[1]])
          setMarRainData(prev=>[...prev,rainKeys[2]])
          setAprRainData(prev=>[...prev,rainKeys[3]])
          setMayRainData(prev=>[...prev,rainKeys[4]])
          setJunRainData(prev=>[...prev,rainKeys[5]])
          setJulRainData(prev=>[...prev,rainKeys[6]])
          setAugRainData(prev=>[...prev,rainKeys[7]])
          setSepRainData(prev=>[...prev,rainKeys[8]])
          setOctRainData(prev=>[...prev,rainKeys[9]])
          setNovRainData(prev=>[...prev,rainKeys[10]])
          setDecRainData(prev=>[...prev,rainKeys[11]])

          setJanTempData(prev=>[...prev,tempKeys[0]])
          setFebTempData(prev=>[...prev,tempKeys[1]])
          setMarTempData(prev=>[...prev,tempKeys[2]])
          setAprTempData(prev=>[...prev,tempKeys[3]])
          setMayTempData(prev=>[...prev,tempKeys[4]])
          setJunTempData(prev=>[...prev,tempKeys[5]])
          setJulTempData(prev=>[...prev,tempKeys[6]])
          setAugTempData(prev=>[...prev,tempKeys[7]])
          setSepTempData(prev=>[...prev,tempKeys[8]])
          setOctTempData(prev=>[...prev,tempKeys[9]])
          setNovTempData(prev=>[...prev,tempKeys[10]])
          setDecTempData(prev=>[...prev,tempKeys[11]])

          setJanWindData(prev=>[...prev,windKeys[0]])
          setFebWindData(prev=>[...prev,windKeys[1]])
          setMarWindData(prev=>[...prev,windKeys[2]])
          setAprWindData(prev=>[...prev,windKeys[3]])
          setMayWindData(prev=>[...prev,windKeys[4]])
          setJunWindData(prev=>[...prev,windKeys[5]])
          setJulWindData(prev=>[...prev,windKeys[6]])
          setAugWindData(prev=>[...prev,windKeys[7]])
          setSepWindData(prev=>[...prev,windKeys[8]])
          setOctWindData(prev=>[...prev,windKeys[9]])
          setNovWindData(prev=>[...prev,windKeys[10]])
          setDecWindData(prev=>[...prev,windKeys[11]])

          setJanHumidityData(prev=>[...prev,humidityKeys[0]])
          setFebHumidityData(prev=>[...prev,humidityKeys[1]])
          setMarHumidityData(prev=>[...prev,humidityKeys[2]])
          setAprHumidityData(prev=>[...prev,humidityKeys[3]])
          setMayHumidityData(prev=>[...prev,humidityKeys[4]])
          setJunHumidityData(prev=>[...prev,humidityKeys[5]])
          setJulHumidityData(prev=>[...prev,humidityKeys[6]])
          setAugHumidityData(prev=>[...prev,humidityKeys[7]])
          setSepHumidityData(prev=>[...prev,humidityKeys[8]])
          setOctHumidityData(prev=>[...prev,humidityKeys[9]])
          setNovHumidityData(prev=>[...prev,humidityKeys[10]])
          setDecHumidityData(prev=>[...prev,humidityKeys[11]])
          setLoading(false)
        })
        .catch((e)=>{console.log(e)})
    }
   
   
   
    useEffect(()=>{
        getData()
    }, [])



    return (
        <Box sx={{backgroundColor:"#f4f4f4",marginTop:"7vh",width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
            {/**Detail */}
            <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                <Box sx={{width:{xs:"75vw",md:"40vw"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"25px",textAlign:"center"}}>Welcome to monthly farming data</Typography>
                    <Typography fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Farmers are not particularly knowledgeable when it comes to working with data in particular. This is why we have two types of data in this page. One is a basic verdict on the weather and the other is a detailed version for students and researchers. In this page we are showing the amount of average rain, temperature, humidity, wind in a monthly average value.</Typography>
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
        
        
            {/*January* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>January</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(janTempData)+" C") : (tempDefine(getAvg(janTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(janRainData)+" mm") : (rainDefine(getAvg(janRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(janHumidityData)+" %") : (humidityDefine(getAvg(janHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(janWindData)+" m/s") : (windDefine(getAvg(janWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }
            
            {/*February* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>February</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(janTempData)+" C") : (tempDefine(getAvg(febTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(febRainData)+" mm") : (rainDefine(getAvg(febRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(febHumidityData)+" %") : (humidityDefine(getAvg(febHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(febWindData)+" m/s") : (windDefine(getAvg(febWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }

            {/*March* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>March</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(marTempData)+" C") : (tempDefine(getAvg(marTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(marRainData)+" mm") : (rainDefine(getAvg(marRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(marHumidityData)+" %") : (humidityDefine(getAvg(marHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(marWindData)+" m/s") : (windDefine(getAvg(marWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }
            {/*April* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>April</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(aprTempData)+" C") : (tempDefine(getAvg(aprTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(aprRainData)+" mm") : (rainDefine(getAvg(aprRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(aprHumidityData)+" %") : (humidityDefine(getAvg(aprHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(aprWindData)+" m/s") : (windDefine(getAvg(aprWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }

            {/*May* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>May</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(mayTempData)+" C") : (tempDefine(getAvg(mayTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(mayRainData)+" mm") : (rainDefine(getAvg(mayRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(mayHumidityData)+" %") : (humidityDefine(getAvg(mayHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(mayWindData)+" m/s") : (windDefine(getAvg(mayWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }
            {/*June* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>June</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(junTempData)+" C") : (tempDefine(getAvg(junTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(junRainData)+" mm") : (rainDefine(getAvg(junRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(junHumidityData)+" %") : (humidityDefine(getAvg(junHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(junWindData)+" m/s") : (windDefine(getAvg(junWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }

            {/*July* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>July</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(julTempData)+" C") : (tempDefine(getAvg(julTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(julRainData)+" mm") : (rainDefine(getAvg(julRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(julHumidityData)+" %") : (humidityDefine(getAvg(julHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(julWindData)+" m/s") : (windDefine(getAvg(julWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }

            {/*August* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>August</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(augTempData)+" C") : (tempDefine(getAvg(augTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(augRainData)+" mm") : (rainDefine(getAvg(augRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(augHumidityData)+" %") : (humidityDefine(getAvg(augHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(augWindData)+" m/s") : (windDefine(getAvg(augWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }

            {/*September* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>September</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(sepTempData)+" C") : (tempDefine(getAvg(sepTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(sepRainData)+" mm") : (rainDefine(getAvg(sepRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(sepHumidityData)+" %") : (humidityDefine(getAvg(sepHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(sepWindData)+" m/s") : (windDefine(getAvg(sepWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }
            {/*October* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>October</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(octTempData)+" C") : (tempDefine(getAvg(octTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(octRainData)+" mm") : (rainDefine(getAvg(octRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(octHumidityData)+" %") : (humidityDefine(getAvg(octHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(octWindData)+" m/s") : (windDefine(getAvg(octWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }

            {/*November* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>November</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(novTempData)+" C") : (tempDefine(getAvg(novTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(novRainData)+" mm") : (rainDefine(getAvg(novRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(novHumidityData)+" %") : (humidityDefine(getAvg(novHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(novWindData)+" m/s") : (windDefine(getAvg(novWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }

            {/*December* */}
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"30px"}}>December</Typography>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average temp per day (C) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(decTempData)+" C") : (tempDefine(getAvg(decTempData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average rain per day (mm) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(decRainData)+" mm") : (rainDefine(getAvg(decRainData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}> 
                
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average humidity per day (%) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(decHumidityData)+" %") : (humidityDefine(getAvg(decHumidityData)))}
                        </Typography>

                    </Box>
                    <Box sx={{width:"70vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        
                        <Typography color="primary" fontFamily="Bree Serif" sx={{fontSize:"15px"}}>Average wind per day (m/s) : </Typography>
                        <Typography fontFamily="Bree Serif" sx={{fontSize:"30px"}}>
                            {detailed? (getAvg(decWindData)+" m/s") : (windDefine(getAvg(decWindData)))}
                        </Typography>

                    </Box>
                </Paper>
            }
            {loading && <Box sx={{height:"93vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><CircularProgress color="primary"/><Typography fontFamily="Bree Serif" sx={{fontSize:"20px"}} color="primary">Loading Monthly Data</Typography></Box>}
        </Box>
    )
}
