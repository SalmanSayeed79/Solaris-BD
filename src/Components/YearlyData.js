import React,{useState,useEffect} from 'react'
import {Box, Typography,Paper} from '@mui/material'
import {Bar} from 'react-chartjs-2'

export default function YearlyData({lat,lng}) {
    const [monthlyData,setMonthlyData]=useState([])
    const [loading,setLoading]=useState(true)

    const monthlyLabels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const monthlyDataChart = {
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
            data: monthlyData,
            
            }
        ]
    }
    const MonthlyData=()=>{
        const url=`https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DWN,CLRSKY_SFC_SW_DWN&community=RE&longitude=${90.4125}&latitude=${23.8103}&format=JSON&start=2020&end=2020`
        fetch (url).then(res=>res.json())
        .then(data=>{
          //console.log(data)
          let allSky=data.properties.parameter.ALLSKY_SFC_SW_DWN
          let keys = Object.values(allSky)
          console.log(keys)
          setMonthlyData(keys)
          
          setLoading(false)
        }).then(()=>console.log("helo",monthlyData))
        .catch((e)=>{console.log(e)})
        
    }
   
    useEffect(()=>{
      MonthlyData()
    }, [])

    return (
        <Box sx={{backgroundColor:"#f4f4f4",marginTop:"7vh",width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
            {!loading && 
                <Paper sx={{width:"85vw",minHeight:"5vh",display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",justifyContent:"space-around",padding:"1rem",marginTop:"5vh",marginBottom:"3vh"}}>
                    <Typography>2020</Typography>
                    <Bar className="lineChart"
                    style={{maxHeight:"30vh",maxWidth:"40vw" }}
                    data={monthlyDataChart}
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
                </Paper>}
            {loading && <h1>Loading.....</h1>}
        </Box>
    )
}
