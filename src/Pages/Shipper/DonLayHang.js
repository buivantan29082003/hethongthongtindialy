import apiShipper from "../../Config/APICONFIG/ShipperAPI";
import DrawerOrder from "./DrawerOrder";
import { useEffect, useState, useRef } from "react";
import ScanQRCode from "./ModalScanQR";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapBoxConfig from "../../Config/MapboxConfig";

const accessTokenMap = mapBoxConfig.accessToken;
mapboxgl.accessToken = accessTokenMap;

const OrderLayHang = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState({ lat: "", lng: "" });
  const mapContainer = useRef(null);
  const map = useRef(null);
  const statusId = 1;

  useEffect(() => {
    apiShipper.get("order/status?status=" + statusId)
      .then(v => {
        setOrders(v.data.data);
      })
      .catch(error => {
        alert("Có lỗi lấy dữ liệu");
      });
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lng: position.coords.longitude,
          lat: position.coords.latitude,
        });
      },
      (error) => console.error("Error getting location:", error),
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    if (userLocation && mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [userLocation.lng, userLocation.lat],
        zoom: 12,
      });

      new mapboxgl.Marker().setLngLat([userLocation.lng, userLocation.lat]).addTo(map.current);
    }
  }, [userLocation]);

  const getRoute = async () => {
    if (!destination.lat || !destination.lng) return;
    new mapboxgl.Marker().setLngLat([destination.lng, destination.lat]).addTo(map.current);

    const directionsQuery = `https://api.mapbox.com/directions/v5/mapbox/driving/${userLocation.lng},${userLocation.lat};${destination.lng},${destination.lat}?geometries=geojson&access_token=${accessTokenMap}`;
    const directionsResponse = await fetch(directionsQuery);
    const directionsData = await directionsResponse.json();

    const route = directionsData.routes[0].geometry;
    if (!map.current.getSource("route")) {
      map.current.addSource("route", {
        type: "geojson",
        data: { type: "Feature", geometry: route },
      });
      map.current.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: { "line-join": "round", "line-cap": "round" },
        paint: { "line-color": "#007aff", "line-width": 4 },
      });
    } else {
      map.current.getSource("route").setData({ type: "Feature", geometry: route });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "0px", left: "0px",zIndex:'999'}}>
        <DrawerOrder title={"Xem lấy hàng"} orders={orders} />
      </div>
      <ScanQRCode setOrder={setOrder} order={order} />

      {/* Map hướng dẫn đường */}
      <div style={{ position: "absolute", top: "50px", left: "10px", zIndex: 1000 }}>
        <input
          type="text"
          placeholder="Nhập vĩ độ"
          value={destination.lat}
          onChange={(e) => setDestination({ ...destination, lat: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nhập kinh độ"
          value={destination.lng}
          onChange={(e) => setDestination({ ...destination, lng: e.target.value })}
        />
        <button onClick={getRoute}>Dẫn đường</button>
      </div>
      <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />
    </div>
  );
};

export default OrderLayHang;
