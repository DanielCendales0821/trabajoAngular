import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/services/insuranceService';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  public insurance: any = [];
  public idInsurance: any = [];
  constructor(private readonly insuranceService: InsuranceService) { }

  ngOnInit() {
    this.getInsurance();
  }

  getInsurance() {
    this.insuranceService.getInsurance().subscribe(
      res => {
        this.insurance = res.insurance;
      }, err => {
      });
  }

  leftClick(id) {
    this.idInsurance = id;
  }
}
