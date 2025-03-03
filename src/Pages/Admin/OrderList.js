import { useEffect, useState } from "react";
// import MyAddress from "./MyAddress";
import { CheckCircleFilled, DownOutlined, SearchOutlined, YoutubeOutlined } from "@ant-design/icons";
import {  Dropdown, Input, Menu, Pagination, Select, Tag } from "antd";
import { Option } from "antd/es/mentions";
 import { useNavigate } from "react-router-dom";
import apiAdmin from "../../Config/APICONFIG/AdminConfig";

const OrderListAdmin = () => {
  

  const search = () => { 
    apiAdmin
      .get("order/getorder")
      .then((v) => {
        return v.data;
      })
      .then((v) => {
        // console.log(data)
         setFilter((prev) => ({
          ...prev,
          orders: v.orders,
          diemNhanHang:v.diemNhanHang
        }));
      });
  };
 

  useEffect(search, []);
 

  const changeString = (key, value) => { 
    if (String(value) && new String(value).trim().length > 0) {
      filter[key] = value;
    } else {
      filter[key] = null;
    }
     search();
  };

  const [filter, setFilter] = useState({
    tenNguoiNhan: null,
    id: null,
    trangThaiId: 1,
    sortBy: null,
    pageSize: 5,
    page: 0,
    totalPage: 0,
    orders: [],
    diemNhanHang:new Map()
  });  
  return (
    <>
    <div style={{position:"absolute",left:"50%",right:"50%",zIndex:999}}>
      <div dicumen className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white p-4 rounded-xl flex items-center space-x-3 shadow-lg animate-fade-in-out">
            <CheckCircleFilled className="text-green-500 w-6 h-6" />
            <span>Sản phẩm đã được thêm vào Giỏ hàng</span>
          </div> 
      </div>
      {/* <MyAddress setTab={changeNumber} /> */}
      <div className="w-full">
        <p>Filter</p>
        <div className="w-full flex gap-1">
          <Input
            value={filter.id}
            onChange={(e) => {
              changeString("id", e.target.value);
            }}
            placeholder="Enter your id order"
            prefix={<SearchOutlined style={{ color: "#bbb" }} />}
            style={styleInput}
          />
          <Input
            value={filter.tenNguoiNhan}
            onChange={(e) => {
              changeString("tenNguoiNhan", e.target.value);
            }}
            placeholder="Enter your reciver name"
            prefix={<SearchOutlined style={{ color: "#bbb" }} />}
            style={styleInput}
          />
          <Select
            prefix={<SearchOutlined style={{ color: "#bbb" }} />}
            showSearch
            onChange={(e) => { 
              changeString("sortBy",e)
            }}
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "fee",
                label: "Phí dịch vụ",
              },
              {
                value: "khoangcach",
                label: "Khoảng cách",
              },
            ]}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Pagination
              defaultCurrent={filter.page}
              total={filter.totalPage}
              pageSize={filter.pageSize}
              showSizeChanger={false}
            />
            <Select value={filter.pageSize} style={{ width: 100 }}>
              <Option value={5}>5/ page</Option>
              <Option value={10}>10 / page</Option>
              <Option value={20}>20 / page</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-3">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">STT</th>
              <th className="py-2 px-4 text-left">Mã đơn</th>
              <th className="py-2 px-4 text-left">Bên nhận</th>
              <th className="py-2 px-4 text-left">Tổng phí</th>
              <th className="py-2 px-4 text-left">KL tính phí</th>
              <th className="py-2 px-4 text-left">Khoảng cách</th>
              <th className="py-2 px-4 text-left">Hình thức vận chuyển</th>
              <th className="py-2 px-4 text-left">Bưu cục vận chuyển</th>
              <th className="py-2 px-4 text-left">Thao tác chuyển tiếp</th>
            </tr>
          </thead>
          <tbody>
            {filter.orders.map((order, index) => (
              <tr  key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4 text-blue-600 font-semibold">
                  DH{order.id}
                  <p>Đã lấy hàng</p>
                </td>
                <td className="py-2 px-4">
                  <div className="font-bold text-gray-600">
                    {order.tenNguoiNhan}
                  </div>
                  <div className="text-gray-500 font-semibold ">
                    {order.sdtnguoiNhan}
                  </div>
                  <div className="text-sm text-gray-400">
                    Ngày tạo: {order.diaChiChiTiet}
                  </div>
                </td>
                <td className="py-2 px-4 text-red-500 font-semibold">
                  {order.fee} đ
                </td>
                <td className="py-2 px-4 text-blue-900 font-bold">
                  {order.trongLuong} Kg
                </td>
                <td className="py-2 px-4 text-blue-900 font-bold">
                  {order.khoangCachDuTinh} KM
                </td>
                <td className="py-2 px-4">
                  <div className="text-gray-500 text-sm">
                    {" "}
                    <Tag color="magenta">
                      {order.hinhThucVanChuyen != null
                        ? order.hinhThucVanChuyen.tenHinhThuc
                        : ""}
                    </Tag>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <div className="text-gray-500 text-sm text-center">
                    {order.diemNhanHang.id} - {order.diemNhanHang.sdt}
                  </div>
                  <button className=" font-bold text-gray-600 px-4 py-1 rounded-lg ">
                    {order.diemNhanHang.diachichitiet}
                  </button>
                </td>
                <td>
                    {filter.diemNhanHang[order.id]!=null? <Dropdown  overlay={<Menu>
                        
                         {filter.diemNhanHang[order.id].map((v,index)=>{
                            return  <div className="">
                                <div className="flex items-betw">
                                    <p className="font-bold">i: </p>
                                    <p className="font-bold">{index+1}</p>
                                </div>
                                <div className="flex items-betw">
                                    <p className="font-bold">Địa điểm: </p>
                                    <p className="font-bold">{index+1}</p>
                                </div>
                                <p>Địa điểm: {index+1}</p>
                                <p>Điểm nhận hàng: DNH {v.diemNhanHangId}</p>  
                                <p>Khoảng cách ban đầu:   {v.khoangCachDuTinh}</p>   
                                <p>Khoảng cách nếu chuyển tiếp:   {v.khoangCachDuTinhNeChuyenTiep}</p> 
                                <p>Địa chỉ chi tiết:   {v.diChiChiTiet}</p> 
                                <hr/>
                            </div> 
                         })}
                    </Menu>} placement="topCenter" arrow>
                    <p className="text-blue-500 font-bold cursor-pointer">Các điểm chuyển tiếp <DownOutlined style={{display:"inline-block"}} /></p>
                </Dropdown>:<p className="text-red-500 font-bold">Không có điểm nhận hàng</p>}
               
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
const styleInput = {
  width: 250,
  borderRadius: "20px",
  padding: "8px 12px",
  backgroundColor: "#e0e0e0 ",
  border: "none",
  boxShadow: "none",
};

const Action = ({ cancelOrder }) => {
  return (
    <>
      <Tag onClick={cancelOrder} icon={<YoutubeOutlined />} color="#cd201f">
        Hủy đơn
      </Tag>
    </>
  );
};

export default OrderListAdmin;
