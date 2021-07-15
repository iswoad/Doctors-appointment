import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointement from './components/Appointment/Appointment/Appointement';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route path = '/home'>
          <Home />
        </Route>
        <Route path = '/appointment'>
          <Appointement></Appointement>
        </Route>
        <Route path = '/dashboard'>
          <DashBoard></DashBoard>
        </Route>
        <Route path="/allPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/addDoctors">
            <AddDoctor></AddDoctor>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
