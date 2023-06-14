import { Routes, Route } from "react-router-dom";
import Auth from './pages/Auth/Auth';
import Workplace from "./pages/Workplace/Workplace";
import Contact from "./pages/Contact/Contact";
import Report from "./pages/Report/Report";
import ReportDetails from "./pages/ReportDetails/ReportDetails";

function App() {
  return (
    <>
     <Routes>
        <Route path="/login" element={<Auth/>} />
        <Route path="/workplace" element={<Workplace/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/report" element={<Report/>} />
        <Route path="/reportdetails" element={<ReportDetails/>} />
     </Routes>
    </>
  );
}

export default App;
