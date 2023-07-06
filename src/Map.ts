import { Markable } from "./Markable";
export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string, initialPos: { lat: number, lng: number } ) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      center: initialPos,
      zoom: 5,
      zoomControl: true
    });
  }

  addMarkers(markables: Markable[]): void {
    markables.forEach(({ location, content }) => {
      console.log(markables);
      const marker = new google.maps.Marker({
        map: this.googleMap,
        position: location
      });

      marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({ content: content });
        infoWindow.open(this.googleMap, marker);
      });
    });
  }
}