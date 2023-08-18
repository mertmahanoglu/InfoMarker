/// <reference types="@types/google.maps" />
// Instructions to every other class
// on how they can be an argument to 'addMarker'
import { LocationFounder } from './LocationFounder';

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
    google.maps.event.addListener(
      this.googleMap,
      'click',
      async function (event) {
        if (marker !== undefined) hideMarkers(marker);
        const locationFounder = new LocationFounder();
        const windowContent = locationFounder.getLocation(
          event.latLng.lat(),
          event.latLng.lng()
        );
        placeMarker(event.latLng, map, await windowContent);
      }
    );
  }

  openCountryWindow(content: string): void {
    const infoWindow = new google.maps.InfoWindow({
      content: content,
    });

    infoWindow.open(this.googleMap, marker);
  }
}

function placeMarker(location, map: google.maps.Map, content: string): void {
  marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  marker.addListener('click', () => {
    const infoWindow = new google.maps.InfoWindow({
      content: content,
    });

    infoWindow.open(map, marker);
  });

  new google.maps.event.trigger(marker, 'click');
}

// Removes the markers from the map, but keeps them in the array.
function hideMarkers(marker: google.maps.Marker): void {
  marker.setMap(null);
}
