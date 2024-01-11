import { LightningElement, wire } from "lwc";
import showPlaces from "@salesforce/apex/TourismController.showPlaces";

export default class TourismPlaces extends LightningElement {
  tourismPlacesList = [];

  @wire(showPlaces) ws({ data, error }) {
    if (data) {
      console.log("Data--->" + data.Cost__c);
      this.tourismPlacesList = data;
    } else if (error) {
      console.log("Here is some error: " + error);
    }
  }
}
