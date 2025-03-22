 import apiShipper from "../../Config/APICONFIG/ShipperAPI";
import DrawerOrder from "./DrawerOrder";
import { useEffect, useState } from "react";
import ScanQRCode from "./ModalScanQR";

const OrderLayHang=()=>{
    
    const [orders,setOrders]=useState([])
    const [order,setOrder]=useState(null)
    const statusId=1;
    useEffect(()=>{
        apiShipper.get("order/status?status="+statusId).then(v=>{
            setOrders(v.data.data)
        }).catch(error=>{
            alert("Có lỗi lấy dữ liệu")
        })
    },[])
    
    return <div style={{position:"relative"}}> 
       <div style={{position:"absolute",top:"0px",left:"0px"}}>
            <DrawerOrder title={"Xem lấy hàng"} orders={orders}/>
           
       </div>
       <ScanQRCode setOrder={setOrder} order={order}/>
    </div>
}

export default OrderLayHang;