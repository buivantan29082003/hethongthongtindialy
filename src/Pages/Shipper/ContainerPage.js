import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import mapBoxConfig from "../../Config/MapboxConfig";

mapboxgl.accessToken = mapBoxConfig.accessToken;

const ContainerShipperPage = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [106.660172, 10.762622], // (longitude, latitude)
      zoom: 10,
    });

    setMap(newMap);

    return () => newMap.remove();
  }, []);

  // Hàm xử lý tìm kiếm
  const handleSearch = async () => {
    if (!searchText.trim()) return;

    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        searchText
      )}.json?access_token=${mapboxgl.accessToken}`
    );
    const data = await response.json();

    if (data.features.length > 0) {
      const { center } = data.features[0]; 
      map.flyTo({
        center,
        zoom: 14,
        essential: true, 
      });
    }
  };

  return (
    <>
      <p>Hello ContainerShipperPage</p> 
      <div className="flex items-center space-x-2 p-4">
        <input
          type="text"
          placeholder="Nhập địa chỉ..."
          className="px-4 py-2 border rounded-lg w-80 shadow-md"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleSearch}
        >
          Tìm kiếm
        </button>
      </div> 
      <div ref={mapContainerRef} className="w-full h-screen" />
    </>
  );
};

export default ContainerShipperPage;
