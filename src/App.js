import "./App.css";
import { Header, Footer} from "./comps/Allcomps"
import { Text } from "./comps/mini-comps/Text"
import { Routes, Route } from "react-router-dom"
import pic from "./images/Shirt.jpg"
import { Shirt } from "./images/exportimg";

function App() {
  return (
    <div className="App">
      <Text />
      <h2>SO this is some more random text so that we can start</h2>
      <h3>Now we will be cheching these changes in another branch</h3>
      <img src={pic} />
      <Shirt/>
      <Routes>
        <Route path="/" element={  <Header /> } />
        <Route path="/text" element={<Footer/>} />
      </Routes>
    </div>
  );
}

export default App;
