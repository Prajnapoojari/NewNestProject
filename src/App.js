import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Pages/SignUpPage';
import Login from './Pages/LoginPage';
import Admission from './Pages/Admission';
import NewStaff from './Pages/NewStaff';
import './App.css';

function App() {
  return (
     <Router>
          <Routes>
            <Route path="/" element={<NewStaff />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Admission" element={<Admission />} />
            <Route path="/NewStaff" element={<NewStaff />} />
          </Routes>
        </Router>
  );
}

export default App;
