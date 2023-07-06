import { faker } from '@faker-js/faker';

export class User {
  name: string;
  content: string;
  location: {
    lat: number,
    lng: number
  };

  constructor() {
    const name = faker.person.firstName();
    this.name = name;
    this.content = `${name}`;
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    };
  } 
}