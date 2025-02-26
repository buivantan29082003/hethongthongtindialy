import {  DeliveredProcedureOutlined, ExperimentFilled, InboxOutlined, InfoCircleOutlined, PhoneOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Checkbox, Popover, Select } from "antd";
import { Option } from "antd/es/mentions"; 
import { lazy } from "react";
const PickAddress = lazy(() => import("../../Components/Customer/PickAdrress")); 

const AddOrder = () => {
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Customer</Breadcrumb.Item>
        <Breadcrumb.Item>Order</Breadcrumb.Item>
        <Breadcrumb.Item>Add Order</Breadcrumb.Item>
      </Breadcrumb>
      <div className="flex flex-wrap bg-gray-100  " style={{ height: "485px",overflow:"auto",overflowX:"hidden" }}>
        <div className="lg:w-4/5 w-full ">
          <div className="bg-white m-2 p-5  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200" style={{ height: "460px",overflow:"auto",scrollbarWidth:"thin",scrollbarColor:"#888 #f1f1f1"}}>
            <h2 className="font-bold text-lg mb-3"> Bên gửi</h2>
            <div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-2/4">
                  <p className="text-orange-500 font-semibold">
                    0793039393{" "}
                    <PhoneOutlined className="text-md text-orange-500" />{" "}
                    0793039393{" "}
                  </p>
                  <p className="mt-2 ">Ấp Trường Khương - Nhà số 232</p>
                  <p className="text-orange-500 mt-2  inline-block cursor-pointer pb-1 border-b border-orange-500 ">
                    Sửa địa chỉ gửi hàng
                  </p>
                </div>
                <div className="w-full lg:w-2/4">
                  <Select
                    placeholder="Chọn ca lấy"
                    className="w-4/5 m-2 focus:border-red-500 focus:border-2 "
                  >
                    <Option value="apple">Ca sáng - 7h00</Option>
                    <Option value="banana">Ca trưa - 11h30'</Option>
                  </Select>
                  <Checkbox className=" m-2">
                    <p className="font-semibold inline-block">
                      Gửi hàng tại bưu cục{" "}
                    </p>
                  </Checkbox>
                  <Popover
                    className="inline-block mb-3 pl-2"
                    content={"Người giao hàng phải đến bưu cục để giao hàng"}
                    title="Lưu ý"
                  >
                    <InfoCircleOutlined></InfoCircleOutlined>
                  </Popover>
                  <p className="ml-8 w-4/5">
                    Bưu cục 20789000 - Ngã 4 Phố Hòa Bình, Thị Trấn Quảng Uyên,
                    Huyện Quảng Hòa, Cao Bằng
                  </p>
                </div>
              </div>
            </div>
            <hr className="mt-2 mb-2" />

            <h2 className="font-bold text-lg mb-3"> Bên Nhận</h2>
            <div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-2/4">
                  <p className="font-semibold text-md mb-2 ml-2">Số điện thoại</p>
                  <input className="w-4/5 m-2 border rounded-md p-2 border border-gray-300"></input>
                </div>
                <div className="w-full lg:w-2/4">
                  <p className="font-semibold text-md mb-2 ml-2">Địa chỉ <PickAddress/></p>
                  <input className="w-4/5 m-2 border rounded-md p-2 border border-gray-300"></input>
                </div>
                <div className="w-full lg:w-2/4">
                  <p className="font-semibold text-md mb-2 ml-2">Họ tên</p>
                  <input className="w-4/5 m-2 border rounded-md p-2 border border-gray-300"></input>
                </div>
                <div className="w-full lg:w-2/4">
                  <p className="font-semibold text-md mb-2 ml-2">Quận huyện</p>
                  <Select
                    placeholder="Chọn ca lấy"
                    className="w-4/5 m-2 focus:border-red-500 focus:border-2 "
                  >
                    <Option value="apple">Ca sáng - 7h00</Option>
                    <Option value="banana">Ca trưa - 11h30'</Option>
                  </Select>                
                  </div>
                  <div className="w-full lg:w-2/4">
                  <p className="font-semibold text-md ml-2 mb-2">Thành phố</p>
                  <Select
                    placeholder="Chọn ca lấy"
                    className="w-4/5 m-2 focus:border-red-500 focus:border-2 "
                  >
                    <Option value="apple">Ca sáng - 7h00</Option>
                    <Option value="banana">Ca trưa - 11h30'</Option>
                  </Select>                
                  </div>
              </div>
            </div>
            <hr className="mt-2 mb-2" />

            <h2 className="font-bold text-lg mb-3">Dịch vụ  <InboxOutlined style={{ fontSize: "24px", color: "#F56C0D" }} /> </h2>
            <div>
              <div className="flex flex-wrap">
                 
                <div className="w-full lg:w-2/4">
                  <p className="font-semibold text-md mb-2 ml-2">Hình thức vận chuyển</p>
                  <Select defaultValue={"apple"}
                    placeholder="Chọn ca lấy"
                    className="w-4/5 m-2 focus:border-red-500 focus:border-2 "
                  >
                    <Option value="apple"><DeliveredProcedureOutlined/> Express</Option>
                    <Option value="banana"><ExperimentFilled/> Hỏa tốc</Option>
                  </Select>                
                  </div>
                  <div className="w-full lg:w-2/4">
                  <p className="font-semibold text-md mb-2 ml-2">Loại hàng</p>
                  <Select defaultValue={"apple"}
                    placeholder="Chọn ca lấy"
                    className="w-4/5 m-2 focus:border-red-500 focus:border-2 "
                  >
                    <Option value="apple"><ShoppingCartOutlined/> Hàng nặng </Option>
                    <Option value="banana"> <ShoppingCartOutlined/>Hàng nhẹ</Option>
                  </Select>                
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div 
          className="lg:w-1/5 w-5/6 bg-white flex flex-col justify-between border-l border-t border-gray-300"
          style={{ height: "485px" }}
        >
          <div>
            <div className="flex m-2 justify-between border-b pb-2 border-gray-300">
              <p>Phí dịch vụ:</p>
              <p>30.000đ</p>
            </div>
            <div className="flex m-2 pt-3 pb-3 mt-5 justify-between border-b pb-2 border-gray-300">
              <p>Tổng phí:</p>
              <p className="font-bold text-lg ">30.000đ</p>
            </div>
          </div>
          <div> 
            <Select
              placeholder="Chọn một tùy chọn"
              className="w-[95%] m-2 focus:border-red-500 focus:border-2 "
              //   onChange={handleChange}
            >
              <Option value="apple">🍎 Người gửi trả hàng</Option>
              <Option value="banana">🍌 Người nhận trả tiền</Option>
            </Select>
            <Button
              className="w-[95%] m-2 border-2 "
              color="danger"
              variant="outlined"
            >
            
            </Button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOrder;
