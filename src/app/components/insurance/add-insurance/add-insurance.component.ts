import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { InsuranceService } from 'src/app/services/insuranceService';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.scss']
})
export class AddInsuranceComponent implements OnInit {

  public formGroupUser: FormGroup;

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly insuranceServide: InsuranceService
  ) { }



  ngOnInit() {
    this.formGroupUser = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }



  captureInformation() {

      const data = {
        nameInsurance: this.formGroupUser.value.name,
      };
      this.agregar(data);
  }

  agregar(data) {
    this.insuranceServide.postInsurance(data).subscribe(
      res => {
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
        this.router.navigate(['/insurance']);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }

}
