import { Button, Card, Col, Drawer } from "antd";
import { useEffect, useState } from "react";
 
const DrawerOrder = ({orders,title}) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
     
    }; 
    const onClose = () => {
      setOpen(false);
    };
    return (
      <>
        <Button type="primary" onClick={showDrawer}>
          {title}
        </Button>
        <Drawer title="Danh sách đơn hàng" onClose={onClose} open={open}>
            {orders.map(v=><Col className="w-full"  >
                <Card title={`Đơn hàng số ${v.id}`} variant="borderless">
                    <p>Địa chỉ: <strong>{v.xa.tenXa}, {v.xa.huyen.tenHuyen}</strong></p>
                    <p>Trọng lượng: <strong>{v.trongLuong} Kg</strong> </p>
                    <p>Phí Thu: <strong>{v.fee} vnđ</strong> </p>
                    <p>Tên khách hàng: <strong>{v.khachHang.ten}</strong></p>
                    <Button className="mt-2" color="pink" variant="solid">Lấy đơn</Button>
                </Card>
            </Col>)}
        </Drawer>
      </>
    );
};

export default DrawerOrder;