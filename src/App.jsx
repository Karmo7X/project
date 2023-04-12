import { BrowserRouter ,Routes ,Route} from "react-router-dom";
import "./App.css"
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Search from "./pages/Search/Search";
import Favourite from "./pages/Favourite/Favourite";
import Profile from "./pages/Profile/Profile";



function App() {
  
  return (
    <BrowserRouter>

    <Routes>
     <Route path='/' element ={<Home/>}/>
     <Route path='/map' element ={<Map/>}/>
     <Route path='/search' element ={<Search/>}/>
     <Route path='/fav' element ={<Favourite/>}/>
     <Route path='/profile' element ={<Profile/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
