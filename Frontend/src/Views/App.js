import './App.css';
import FrontPage from './FrontPage'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Routing from '../Routes/AuthRoutes'
import ListItemInput from './ListItemInput'
import ListingListItems from './ListingListItems'

function App() {
  return (
    <div className="App">
      {/* <FrontPage />     */}
      {/* <Signup />   */}
      {/* <Login /> */}
      {/* <Home /> */}
      <Routing />
      {/* <ListingListItems /> */}
      {/* <ListItemInput /> */}
    </div>
  );
}

export default App;
