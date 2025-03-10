import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
 import Cod from "./Pages/Customer/Cod";
import Notifycation from "./Pages/Customer/Notification";
import   "./index.css"
import OrderList from "./Pages/Customer/OrderList";
import UpdateOrder from "./Pages/Customer/UpdateOrder";
import OrderListAdmin from "./Pages/Admin/OrderList";
import PhanCong from "./Pages/Admin/PhanCong";
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
              <Route path="updateOrder/:orderId/:type" element={<UpdateOrder />} />

              <Route path="updateOrder" element={<UpdateOrder />} />
              <Route path="address" element={<OrderList />} />
              <Route path="cod" element={<Cod />} />
              <Route path="notifycation" element={<Notifycation />} />
            </Route> 
            <Route path="/admin" element={<ContainerAdminPage />}> 
              <Route path="orders" element={<OrderListAdmin />} /> 
            <Route path="phancong" element={<PhanCong/>}/>
            </Route> 
            <Route path="/shipper" element={<ContainerShipperPage />} />
          </Routes>
          
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
