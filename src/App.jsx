import { BrowserRouter ,Routes ,Route} from "react-router-dom";
import "./App.css"
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Favourite from "./pages/Favourite/Favourite";
import Profile from "./pages/Profile/Profile";
import Booking from "./pages/Booking/Booking";
import Maping from "./pages/Map/Map";


function App() {
 

  return (
    <BrowserRouter>

    <Routes>
     <Route path='/' element ={<Home/>}/>
     <Route path='/map' element ={<Maping/>}/>
     <Route path='/search' element ={<Search/>}/>
     <Route path='/fav' element ={<Favourite/>}/>
     <Route path='/profile' element ={<Profile/>}/>
     <Route path='/Booking' element={<Booking/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
