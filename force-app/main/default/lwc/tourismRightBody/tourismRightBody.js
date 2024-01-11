import { LightningElement, wire } from "lwc";
import amChannel from "@salesforce/messageChannel/AppMessageChannel__c";
//messageContext class is cache and subscribe is function
import { subscribe, MessageContext } from "lightning/messageService";

export default class TourismRightBody extends LightningElement {
  @wire(MessageContext) mcon;
  dataFromSideBar = "";

  // 3params: 1. name of the context 2. Channel name from where to subscribe 3.data processing
  connectedCallback() {
    if (this.mcon != null) {
      subscribe(this.mcon, amChannel, (cdata) => {
        this.capData(cdata);
      });
    }
  }

  capData(cdata) {
    this.dataFromSideBar = cdata.menuval;
  }
}
