import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  onPayeeSelection: boolean = true;
  payeeLabel: string = "Payees";
  name = "The nz-select show nothing when i set customerObj in ngOnInit";
  customerObj: any = {};
  customers: Array<any> = [
    {
      name: "AAA",
      mark: "AAA",
      age: 18,
      sex: "male"
    },
    {
      name: "BBB",
      mark: "BBB",
      age: 19,
      sex: "male"
    },
    {
      name: "CCC",
      mark: "CCC",
      age: 20,
      sex: "female"
    }
  ];
  ngOnInit() {
    this.customerObj = {
      name: "AAA",
      mark: "AAA",
      age: 18,
      sex: "male"
    };
    this.customerObj = this.customers.find(
      item => item.name === this.customerObj.name
    );
    // console.log(this.customerObj===this.customers[0]);
    // it will works well.
    // this.customerObj = this.customers[0];
  }

  changeCustomer(customer) {
    this.customerObj = customer;
  }
}
