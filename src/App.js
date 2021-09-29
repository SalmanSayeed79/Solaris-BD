import {Route, BrowserRouter,Switch} from 'react-router-dom'
import {ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material/styles'
import orange from '@mui/material/colors/orange'
import Home from './Pages/Home'
import Locations from './Pages/Locations'
import About from './Pages/About'
import Choose from './Pages/Choose'
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
        <Route exact path="/about" component={About}/>
        <Route exact path="/choose" component={Choose}/>
      </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
