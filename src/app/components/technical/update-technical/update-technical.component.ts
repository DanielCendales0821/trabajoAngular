import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TechnicalService } from 'src/app/services/techicalService';

@Component({
  selector: 'app-update-technical',
  templateUrl: './update-technical.component.html',
  styleUrls: ['./update-technical.component.scss']
})
export class UpdateTechnicalComponent implements OnInit {

  public formGroupUser: FormGroup;
  public idTechnical: any;
  public technical: any;
  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly technicalService: TechnicalService
  ) {
    this.technical = new Object();
  }



  ngOnInit() {
    this.route.params.subscribe(params => this.idTechnical = params['id']);
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
    this.getTechnical();
  }

  getTechnical() {
    this.technicalService.getTechnicalById(this.idTechnical).subscribe(
      res => {
        this.technical = res.technical;
      }, err => { });
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
    this.updateTechnical(data);
  }

  updateTechnical(data) {
    this.technicalService.updateTechnical(data, this.idTechnical).subscribe(
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
