import "./App.css";

import Shifts from "./components/Shifts";
import Loginpage from "./components/Loginpage";
import Phoneslist from "./components/Phoneslist";
import { Routes, Route } from "react-router-dom";
import Availability from "./components/Availability";
// import Calender from "./components/Calender";
import Workernavbar from "./components/Workernavbar";
import Manager from "./components/Manager";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="Worker" element={<Workernavbar />}>
        <Route index element={<Shifts />} />
        <Route path ="availability" element={<Availability />} />
        <Route path="phonelist" element={<Phoneslist />} />
      </Route>
      <Route path="Manager" element={<Manager/>}/>
    </Routes>
  );
} 

export default App;
