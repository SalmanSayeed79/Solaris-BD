import React from 'react'
import Axios from 'axios'
import { DataSaverOffOutlined } from '@mui/icons-material';
export default function MonthlyData() {
    let monthlyData;
    const url="http://power.larc.nasa.gov/api/temporal/monthly/point?parameters=T2M,T2M_MAX&community=SB&longitude=0&latitude=0&format=JSON&start=2016&end=2017"
    fetch (url) .then(res=>res.json())
    .then(data=>console.log(data.properties.parameter.T2M))
    //.catch((e)=>{console.log(e)})
    return monthlyData;
}
