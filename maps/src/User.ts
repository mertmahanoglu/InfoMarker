import {faker} from '@faker-js/faker';
import { LocationInfo } from './CustomMap';

export class User implements LocationInfo{
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