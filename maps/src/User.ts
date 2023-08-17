import {faker} from '@faker-js/faker';

export class User{
  Username: string;
  UserLocation: {
    lat: number;
    lng: number;
  }

  constructor(){
    this.Username = faker.person.fullName();
    this.UserLocation = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }
}