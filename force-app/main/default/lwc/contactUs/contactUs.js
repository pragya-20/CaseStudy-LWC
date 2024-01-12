import { LightningElement } from "lwc";

export default class ContactUs extends LightningElement {
  boxstatus = true;
  closeContact() {
    this.boxstatus = false;
    const cancelMsg = { msg: "cancel" };
    let ev = new CustomEvent("closeEvent", { detail: cancelMsg });
    this.dispatchEvent(ev);
  }
  //   showHome(event) {
  //     var msg = event.detail.msg;
  //     if (msg === "cancel") {

  //     }
  //   }
}
