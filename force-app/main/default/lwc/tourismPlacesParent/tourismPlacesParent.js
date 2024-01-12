import { LightningElement } from "lwc";
import showData from "@salesforce/apex/TourismController.showData";

export default class TourismPlacesParent extends LightningElement {
  childId = "";
  trec = null;

  handleTrEvent(event) {
    this.childId = event.detail.tourismId;
    console.log("In Tourism Places Parent: ", this.child);

    showData({ tId: this.childId })
      .then((result) => {
        console.log("Result after ShowData call:" + result);
        this.trec = result;
      })
      .catch((error) => {
        console.log("Yahan error hai:  " + error);
      });
  }

  get trecFound() {
    return this.trec != null;
  }
}
