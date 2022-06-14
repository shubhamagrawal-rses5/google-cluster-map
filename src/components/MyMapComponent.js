import React, { useEffect, useRef } from "react";
const style = {
  height: "100vh",
  width: "100%",
};
export default function MyMapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div style={style} ref={ref} id="map" />;
}
