import {faker} from '@faker-js/faker';

export class User{
  Username: string;
  Location: {
    lat: number;
    lng: number;
  }

  constructor(){
    this.Username = faker.person.fullName();
    this.Location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }
}