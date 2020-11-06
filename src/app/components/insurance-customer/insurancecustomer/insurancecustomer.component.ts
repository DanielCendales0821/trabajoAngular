import { Component, OnInit } from '@angular/core';
import { InsuranceCustomerService } from 'src/app/services/insuranceCustomerService';

@Component({
  selector: 'app-insurancecustomer',
  templateUrl: './insurancecustomer.component.html',
  styleUrls: ['./insurancecustomer.component.scss']
})
export class InsurancecustomerComponent implements OnInit {

  public insuranceCustomer: any = [];
  public idInsuranceCustomer: any;
  constructor(private readonly insuranceCustomerService: InsuranceCustomerService) { }

  ngOnInit() {
    this.getInsurance();
  }

  getInsurance() {
    this.insuranceCustomerService.getInsuranceCustomer().subscribe(
      res => {
        this.insuranceCustomer = res.insurancesCostumers;
        console.log(this.insuranceCustomer);
      }, err => {
        console.log(err);
      });
  }

  leftClick(id) {
    this.idInsuranceCustomer = id;
  }

}
