/// <reference types="@types/google.maps" />
// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface LocationInfo {
  Location: {
    lat: number;
    lng: number;
  };
}
let marker;
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(
      document.getElementById('map-div') as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(): void {
    const map = this.googleMap;
    google.maps.event.addListener(this.googleMap, 'click', function (event) {
      if (marker !== undefined) hideMarkers(marker);
      placeMarker(event.latLng, map);
    });
  }
}

function placeMarker(location, map: google.maps.Map): void {
  marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

// Removes the markers from the map, but keeps them in the array.
function hideMarkers(marker: google.maps.Marker): void {
  marker.setMap(null);
}
