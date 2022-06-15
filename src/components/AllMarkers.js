import { useEffect, useRef } from "react";
import data from "./../data/Tooltipdata";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

export default function AllMarkers({ map }) {
  let markers = useRef([]);
  useEffect(() => {
    markers.current = data.map((element, index) => {
      let marker = new window.google.maps.Marker({});
      if (marker) {
        marker.setMap(map);
        marker.setPosition(element.position);
      }
      return marker;
    });
    const all = markers.current;
    // console.log(all);
    const markerCluster = new MarkerClusterer({ all, map });
    markerCluster.setMap(map);
  });

  return null;
}
