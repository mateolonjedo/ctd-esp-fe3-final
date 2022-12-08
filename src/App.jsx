import Home from "./Routes/Home";
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes} from 'react-router-dom'
import { useContextGlobal } from "./Components/utils/global.context";


function App() {
  const {state} = useContextGlobal();
  return (
      <div className={"App "+state.theme}>
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/dentist/:id' element={<Detail/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
