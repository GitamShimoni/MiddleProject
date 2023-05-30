import "./App.css";

import Shifts from "./components/Shifts";
import Loginpage from "./components/Loginpage";
import Phoneslist from "./components/Phoneslist";
import { Routes, Route } from "react-router-dom";
import Availability from "./components/Availability";
import Template from "./components/Template";
// import Calender from "./components/Calender";
import Test from "./components/Test";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Loginpage />} />
      <Route path="/" element={<Template />}>
        <Route index element={<Shifts />} />
        <Route path="/availble" element={<Availability />} />
        <Route path="/phonelist" element={<Phoneslist />} />
        <Route path="/calender" element={<Test />} />
      </Route>
    </Routes>
  );
}

export default App;
