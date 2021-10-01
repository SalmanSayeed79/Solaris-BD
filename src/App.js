import {Route, BrowserRouter,Switch} from 'react-router-dom'
import {ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material/styles'
import orange from '@mui/material/colors/orange'
import Home from './Pages/Home'
import Locations from './Pages/Locations'
import TiltLocation from './Pages/TiltLocation'
import ChooseFarming from './Pages/ChooseFarming'
import FarmingBasicLocation from './Pages/FarmingBasicLocation'
import FarmingDetailedLocation from './Pages/FarmingDetailedLocation'
import PrecipitationLocation from './Pages/PrecipitationLocation'
import About from './Pages/About'
import Choose from './Pages/Choose'
import MonthlySolar from './Pages/MonthlySolar'
import YearlySolar from './Pages/YearlySolar'
import Appbar from './Components/Appbar'
const customTheme=createTheme({
  palette:{
    primary: {
      main:"#ff9800",
      light:"#ffb74d",
      dark:"#f57c00",
      contrastText:"#f4f4f4"
    },
    success:{
      main:"#f4f4f4"
    },
    green:{
      main:"#4caf50"
    },
    red:{
      main:"#f44336"
    },
    yellow:{
      main:"#ffc107"
    }
  }

})

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
      
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/locations" component={Locations}/>
        <Route exact path="/precipitationLocation" component={PrecipitationLocation}/>
        <Route exact path="/farmingbasicLocation" component={FarmingBasicLocation}/>
        <Route exact path="/farmingDetailedLocation" component={FarmingDetailedLocation}/>
        <Route exact path="/TiltLocation" component={TiltLocation}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/choose" component={Choose}/>
        <Route exact path="/chooseFarming" component={ChooseFarming}/>
        <Route exact path="/monthlySolar" component={MonthlySolar}/>
        <Route exact path="/yearlySolar" component={YearlySolar}/>
      </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
