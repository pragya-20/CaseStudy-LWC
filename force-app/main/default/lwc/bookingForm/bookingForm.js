import { LightningElement } from "lwc";
import insertBooking from "@salesforce/apex/BookingController.insertBooking";

export default class BookingForm extends LightningElement {
  bookingMsg = "";

  validateform() {
    let formValid = false;
    let icontrols = this.template.querySelectorAll("lightning-input");
    for (let i = 0; i < icontrols.length; i++) {
      if (icontrols[i].validity.valid === true) {
        formValid = true;
      } else {
        formValid = true;
        break;
      }
    }
    if (formValid === true) {
      this.template.querySelector(".enable-submit").disabled = false;
    } else this.template.querySelector(".enable-submit").disabled = true;
  }
  handleSubmit() {
    let cname = this.template.querySelector(".customer-name").value;
    let cemail = this.template.querySelector(".customer-email").value;
    let cdestination = this.template.querySelector(".destination").value;
    let cnod = this.template.querySelector(".no-of-days").value;
    let cstartdate = this.template.querySelector(".start-date").value;
    let cnop = this.template.querySelector(".no-of-persons").value;
    alert("Form Submitted!" + cname + cemail + cdestination);

    insertBooking({
      custName: cname,
      custEmail: cemail,
      custDestination: cdestination,
      custNOD: cnod,
      custStartDate: cstartdate,
      custNOP: cnop
    })
      .then((result) => {
        alert(result);
        this.bookingMsg = result;
      })
      .catch((error) => {
        this.bookingMsg = error;
        console.log("Error: " + error);
      });
  }
  handleCancel() {
    const cancelMsg = { cancelmsg: "cancel" };
    let ev = new CustomEvent("cancelpage", { detail: cancelMsg });
    this.dispatchEvent(ev);
  }
}
