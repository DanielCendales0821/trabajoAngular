import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/services/insuranceService';
@Component({
  selector: 'app-update-insurance',
  templateUrl: './update-insurance.component.html',
  styleUrls: ['./update-insurance.component.scss']
})
export class UpdateInsuranceComponent implements OnInit {

  public formGroupUser: FormGroup;
  public idInsurance: any;
  public insurance: any;
  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly insuranceServide: InsuranceService
  ) {
    this.insurance = new Object();
  }



  ngOnInit() {
    this.route.params.subscribe(params => this.idInsurance = params['id']);
    this.formGroupUser = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.getCustomerById();
  }


  public async getCustomerById() {
    this.insuranceServide.getInsuranceById(this.idInsurance).subscribe(
      res => {
        this.insurance = res.Insurance;
      }, err => { });
  }

  captureInformation() {

    const data = {
      nameInsurance: this.formGroupUser.value.name,
    };
    this.agregar(data);
  }

  agregar(data) {
    this.insuranceServide.updateInsurance(data, this.idInsurance).subscribe(
      res => {
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
        this.router.navigate(['/insurance']);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }

}
