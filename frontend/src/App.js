import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Workplace from "./pages/Workplace/Workplace";
import { RequireAuth } from "react-auth-kit";
import Contact from "./pages/Contact/Contact";
import Report from "./pages/Report/Report";
import ReportDetails from "./pages/ReportDetails/ReportDetails";
import Notification from "./pages/Notification/Notification";
import Deals from "./pages/Deals/Deals";
import Quote from "./pages/Quote/Quote";
import CreateQuote from "./pages/CreateQuote/CreateQuote";
import Table from "./pages/Tabel/Tabel";
// import Kanban from "./pages/Kanban/Kanban";
import Partners from "./pages/Partners/Partners";
// import Pipline from "./pages/PiplineKanban/PiplineKanban";
import KanbanBoard from "./pages/Kanban2/kanban";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route
          path={"/workplace"}
          element={
            <RequireAuth loginPath={"/login"}>
              <div>Secure</div>
            </RequireAuth>
          }
        />
        {/* <Route
          path={"/contact"}
          element={
            <RequireAuth loginPath={"/login"}>
              <Contact />
            </RequireAuth>
          }
        /> */}
        <Route path="/table" element={<Table />} />
        <Route path="/pipline" element={<KanbanBoard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workplace" element={<Workplace />} />
        <Route path="/report" element={<Report />} />
        <Route path="/reportdetails" element={<ReportDetails />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/deal" element={<Deals />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/createquote" element={<CreateQuote />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
    </>
  );
}

export default App;
