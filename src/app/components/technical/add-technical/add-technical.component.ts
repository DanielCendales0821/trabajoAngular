import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TechnicalService } from 'src/app/services/techicalService';

@Component({
  selector: 'app-add-technical',
  templateUrl: './add-technical.component.html',
  styleUrls: ['./add-technical.component.scss']
})
export class AddTechnicalComponent implements OnInit {

  public formGroupUser: FormGroup;

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly technicalService: TechnicalService
  ) { }



  ngOnInit() {
    this.formGroupUser = this.formBuilder.group({
      nameTechnical: ['', Validators.required],
      lastNameTechnical: ['', Validators.required],
      document: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      specialty: ['', Validators.required],
      numberBill: ['', Validators.required],
      bank: ['', Validators.required]
    });
  }



  captureInformation() {
    const data = {
      nameTechnical: this.formGroupUser.value.nameTechnical,
      lastNameTechnical: this.formGroupUser.value.lastNameTechnical,
      document: this.formGroupUser.value.document,
      email: this.formGroupUser.value.email,
      phone: this.formGroupUser.value.phone,
      specialty: this.formGroupUser.value.specialty,
      numberBill: this.formGroupUser.value.numberBill,
      bank: this.formGroupUser.value.bank
    };
    this.addCostumer(data);
  }

  addCostumer(data) {
    this.technicalService.postTechnical(data).subscribe(
      res => {
        if (res.ok) {
          this.generalService.abrirMensaje('Agregado Correctamente', 'success');
          this.router.navigate(['/technical']);
        } else {
          this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        }

      }, err => {
        this.generalService.abrirMensaje('Error de servidor', 'error');
      });
  }

}
