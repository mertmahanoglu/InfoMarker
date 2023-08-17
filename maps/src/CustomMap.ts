import { Company } from "./Company";
import { User } from "./User";

export interface LocationInfo{
  Location: {
    lat: number;
    lng: number;
  }
}

export class CustomMap{
  private map: google.maps.Map;
  constructor(){
    this.map = new google.maps.Map(document.getElementById("map-div") as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(entity : LocationInfo): void{
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: entity.Location.lat,
        lng: entity.Location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "some content"
      });
      infoWindow.open(this.map,marker)
    });
  }
}