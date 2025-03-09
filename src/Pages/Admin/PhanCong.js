import { AntDesignOutlined } from "@ant-design/icons";
import { Breadcrumb, Button } from "antd";

const PhanCong=()=>{
    return <>
        <div className="flex items-center gap-4">
        <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Customer</Breadcrumb.Item>
            <Breadcrumb.Item>Order</Breadcrumb.Item>
            <Breadcrumb.Item>Phân công</Breadcrumb.Item>
        </Breadcrumb>
        <Button type="primary" size="large" icon={<AntDesignOutlined
         />}>
          Fetching
        </Button>
        </div>
    </>
}

export default PhanCong;