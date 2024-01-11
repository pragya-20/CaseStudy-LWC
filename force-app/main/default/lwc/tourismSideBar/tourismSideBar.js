import { LightningElement, wire } from "lwc";
import amChannel from "@salesforce/messageChannel/AppMessageChannel__c";
//messageContext class is cache and publish is function
import { publish, MessageContext } from "lightning/messageService";

export default class TourismSideBar extends LightningElement {
  @wire(MessageContext) mcon;
  nValue = "";
  sendName(event) {
    this.nValue = event.target.name;
    const cdata = { menuval: this.nValue };
    publish(this.mcon, amChannel, cdata); //publish take 3 params: 1. 2. Where needs to be published 3. what needs to be published
  }
}
