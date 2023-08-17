import {faker} from '@faker-js/faker';
import { LocationInfo } from './CustomMap';

export class Company implements LocationInfo{
  CompanyName: string;
  CatchPhrase: string;
  Location: {
    lat: number;
    lng: number;
  };

  constructor(){
    this.CompanyName = faker.company.name();
    this.CatchPhrase = faker.company.catchPhrase();
    this.Location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    };
  }

}