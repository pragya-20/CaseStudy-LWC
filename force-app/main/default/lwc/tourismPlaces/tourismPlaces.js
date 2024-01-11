import { LightningElement, wire } from "lwc";
import showPlaces from "@salesforce/apex/TourismController.showPlaces";

export default class TourismPlaces extends LightningElement {
  tourismPlacesList = [];

  @wire(showPlaces) ws({ data, error }) {
    if (data) {
      this.tourismPlacesList = data;
    } else if (error) {
      console.log("Here is some error: " + error);
    }
  }

  sendId(event) {
    var trId = event.currentTarget.dataset.sfid; //why currentTarget? read on this
    var ev;
    console.log("trID--" + trId);
    // to send the sf id to the parent component to parent component, we need to create a custom event
    const cdata = { tourismId: trId };
    console.log("cData--", cdata.tourismId);
    ev = new CustomEvent("trevent", { detail: cdata });
    this.dispatchEvent(ev);
  }
}
