import './App.css';
import Home from './components/Home';
import { Route } from 'react-router-dom'
import CountryDetail from './components/CountryDetail';
import NewActivity from './components/NewActivity';
import LandingPage from './components/LandingPage';

function App() {
  return (
      
        <div className="App">
       
          <Route exact path="/" component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/countries/:countryId' component={CountryDetail} />
          <Route exact path='/newActivity' component={NewActivity} />
        
        </div>
      
  );
}

export default App;
