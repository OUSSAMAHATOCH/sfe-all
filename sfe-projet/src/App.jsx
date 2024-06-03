import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import VerificationForm from "./pages/VerificationForm";
import Document from "./pages/Document";
import GeneratedForm from "./pages/GeneratedForm";
import Forms from "./pages/Forms";
import UpdateForm from "./pages/UpdateForm";
import Order from "./pages/Order";
import Rapport from "./pages/Rapport";
import Orders from "./pages/Orders";
import UpdatedOrder from "./pages/UpdatedOrder";
import OrderDocument from "./pages/OrderDocument";
import VerificationPeriodic from "./pages/VerificationPeriodic";
import PeriodicForms from "./pages/PeriodicForms";
import UpdatePeriodicForm from "./pages/UpdatePeriodicForm";
import PeriodicReport from "./pages/PeriodicReport";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/:id" element={<VerificationForm />} />
          <Route path="/periodicForm/:id" element={<VerificationPeriodic />} />
          <Route path="/document/:id" element={<Document />} />
          <Route path="/generatedForm/:id" element={<GeneratedForm />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/updatedForm/:id" element={<UpdateForm />} />
          <Route path="/updatedOrder/:id" element={<UpdatedOrder />} />
          <Route path="/updatedPeriodicForm/:id" element={<UpdatePeriodicForm />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/rapport/:id" element={<Rapport />} />
          <Route path="/periodicReport/:id" element={<PeriodicReport />} />
          <Route path="/orderDocument/:id" element={<OrderDocument />} />
          <Route path="/periodicForms/" element={<PeriodicForms />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
