import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MyAddress from "./Pages/Customer/MyAddress";
import Cod from "./Pages/Customer/Cod";
import Notifycation from "./Pages/Customer/Notification";
import   "./index.css"
// Lazy load các component
const ContainerCustomerPage = lazy(() => import("./Pages/Customer/ContainerPage"));
const AddOrder = lazy(() => import("./Pages/Customer/AddOrder"));
const ContainerAdminPage = lazy(() => import("./Pages/Admin/ContainerPage"));
const ContainerShipperPage = lazy(() => import("./Pages/Shipper/ContainerPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Suspense fallback={<div>Loading...</div>}>
          <Routes> 
            <Route path="/customer" element={<ContainerCustomerPage />}>
              <Route path="addOrder" element={<AddOrder />} />
              <Route path="address" element={<MyAddress />} />
              <Route path="cod" element={<Cod />} />
              <Route path="notifycation" element={<Notifycation />} />
            </Route> 
            <Route path="/admin" element={<ContainerAdminPage />} />
            <Route path="/shipper" element={<ContainerShipperPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
