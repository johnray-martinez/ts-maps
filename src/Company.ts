import { faker } from "@faker-js/faker";
import { Markable } from "./Markable";

export class Company implements Markable {
  name: string;
  catchPhrase: string;
  location: {
    lng: number;
    lat: number;
  };
  content: string

  constructor() {
    const { name, catchPhrase } = faker.company;

    this.name = name();
    this.catchPhrase = catchPhrase();
    this.location = {
      lng: faker.location.longitude(),
      lat: faker.location.latitude()
    };

    this.content = `${this.name} \n ${this.catchPhrase}`;
  }
}