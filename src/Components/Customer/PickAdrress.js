import { EnvironmentFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import mapBoxConfig from "../../Config/MapboxConfig";

mapboxgl.accessToken = mapBoxConfig.accessToken; // Thay bằng token của bạn
 
const PickAddress = () => {
  const [open, setOpen] = useState(false);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null); // Lưu trữ instance của Mapbox

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open && !mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current, // Container của map
        style: "mapbox://styles/mapbox/streets-v11",
        center: [106.660172, 10.762622], // Tọa độ HCM
        zoom: 12,
      });
    }
  }, [open]);

  return (
    <>
      <EnvironmentFilled className="text-orange-500 ml-2 text-2xl" onClick={showModal} />
      <Modal
        open={open}
        onCancel={handleCancel}
        footer={null}
        width="90vw"
        style={{ top: 0, padding: 0 }}
        bodyStyle={{ padding: 0, margin: 0, height: "90vh" }}
        // closable={false}  
      >
        <div style={{height:"100%",width:"100%"}}> 
            <div ref={mapContainerRef} style={{ height: "100%", width: "100%" }} />
        </div>
      </Modal>
    </>
  );
};

export default PickAddress;
