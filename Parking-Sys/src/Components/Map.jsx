import React from 'react'
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  LayerGroup ,
  LayersControl
} from "react-leaflet";


function Map() {
  return (
    (
      <div style={{ display: "flex" }}>   
        <MapContainer
          style={{
            height: "100vh",
            width: "80%",
            margin : "10px auto"
          }}
          center={[33.52355922735366, 36.317284883627735]}
          zoom={14}
        >
          <LayersControl>
            <LayersControl.BaseLayer name="Open Street Map">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
  
            <LayersControl.BaseLayer name="Mapbox Map">
              <TileLayer
                attribution='&copy; <a href="https://www.mapbox.com">Mapbox</a> '
                url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}"
                accessToken={"your token here"}
              />
            </LayersControl.BaseLayer>
  
            <LayersControl.BaseLayer name="Mapbox Map Satellite">
              <TileLayer
                attribution='&copy; <a href="https://www.mapbox.com">Mapbox</a> '
                url="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}"
                accessToken={"your token here"}
              />
            </LayersControl.BaseLayer>
  
            <LayersControl.BaseLayer checked name="Google Map">
              <TileLayer
                attribution="Google Maps"
                url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
              />
            </LayersControl.BaseLayer>
  
            <LayersControl.BaseLayer name="Google Map Satellite">
              <LayerGroup>
                <TileLayer
                  attribution="Google Maps Satellite"
                  url="https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
                />
                <TileLayer url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}" />
              </LayerGroup>
            </LayersControl.BaseLayer>
          </LayersControl>
        </MapContainer>
      </div>
    )
  )
}

export default Map