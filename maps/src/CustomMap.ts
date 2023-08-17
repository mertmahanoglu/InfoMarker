import { Company } from "./Company";
import { User } from "./User";

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

  addUserMarker(user : User): void{
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: user.UserLocation.lat,
        lng: user.UserLocation.lng
      }
    });
  }
  addCompanyMarker(company : Company): void{
    
  }
}