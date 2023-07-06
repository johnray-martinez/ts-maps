import { User } from "./user";
import { Company } from "./Company";

const newUser = new User();
const newCompany = new Company();

new google.maps.Map(document.getElementById('map') as HTMLElement, {
  center: newUser.location,
  zoom: 5,
  zoomControl: true
});