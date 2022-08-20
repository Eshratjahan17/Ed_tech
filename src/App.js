import { Route, Routes } from "react-router-dom";
import './App.css';
import Contact from "./Components/Contact";
import Courses from "./Components/Courses";
import Home from './Components/Home';
import Login from "./Components/Login";
import Programs from "./Components/Programs/Programs";

import RequireAuth from "./Components/RequireAuth";
import Services from "./Components/Services/Services";
import Signup from "./Components/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Courses" element={<Courses></Courses>}></Route>
        <Route
          path="/Services"
          element={
            <RequireAuth>
              <Services></Services>
            </RequireAuth>
          }
        ></Route>
        <Route path="/Programs" element={<Programs></Programs>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}
 
export default App;
