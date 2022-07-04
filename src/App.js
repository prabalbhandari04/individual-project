import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Facilities from "./pages/Facilities";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileDcotor from "./pages/ProfileDoctor";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/patient" element={<Profile />} />
        <Route path="/profile/doctor" element={<ProfileDcotor />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/users" element={<Doctors />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
