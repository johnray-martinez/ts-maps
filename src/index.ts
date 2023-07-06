import { Map } from "./Map";
import { User } from "./User";
import { Company } from "./Company";

const newUser = new User();
const newCompany = new Company();
const map = new Map('map', newUser.location);
console.log(newUser, newCompany);

const markers = [newUser, newCompany];

map.addMarkers(markers);
