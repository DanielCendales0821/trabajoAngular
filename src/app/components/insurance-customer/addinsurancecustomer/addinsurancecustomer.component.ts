import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/services/insuranceService';
import { InsuranceCustomerService } from 'src/app/services/insuranceCustomerService';
import { CostumerService } from 'src/app/services/costumerService';

@Component({
  selector: 'app-addinsurancecustomer',
  templateUrl: './addinsurancecustomer.component.html',
  styleUrls: ['./addinsurancecustomer.component.scss']
})
export class AddinsurancecustomerComponent implements OnInit {

  public formGroupUser: FormGroup;
  public costumers: any = [];
  public insurance: any = [];

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly insuranceCustomerService: InsuranceCustomerService,
    private readonly insuranceService: InsuranceService,
    private readonly costumerService: CostumerService
  ) { }



  ngOnInit() {
    this.formGroupUser = this.formBuilder.group({
      insurance: ['', Validators.required],
      customer: ['', Validators.required]
    });
    this.getInsurance();
    this.getCustomer();
  }

  getInsurance() {
    this.insuranceService.getInsurance().subscribe(
      res => {
        this.insurance = res.insurance;
        console.log(this.insurance);
      }, err => {
        console.log(err);
      });
  }

  getCustomer() {
    this.costumerService.getCostumer().subscribe(
      res => {
        this.costumers = res.costumers;
        console.log(this.costumers);
      }, errror => {
        console.log(errror);
      });
  }



  captureInformation() {

    const data = {
      costumer: this.formGroupUser.value.customer,
      insurance: this.formGroupUser.value.insurance,
    };
    console.log(data);
    this.agregar(data);
  }

  agregar(data) {
    this.insuranceCustomerService.postInsuranceCustomer(data).subscribe(
      res => {
        console.log(res);
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
        this.router.navigate(['/insurance/customer/']);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }

}
