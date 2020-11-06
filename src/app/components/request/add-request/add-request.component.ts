import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/requestService';
import { ServicesService } from 'src/app/services/servicesService';
import { CostumerService } from 'src/app/services/costumerService';
import { TechnicalService } from 'src/app/services/techicalService';
import { EncryptService } from 'src/app/services/encrypt.service';
import { User } from 'src/app/models/user';
import { InsuranceService } from 'src/app/services/insuranceService';


@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.scss']
})
export class AddRequestComponent implements OnInit {

  public formGroupUser: FormGroup;
  public costumers: any = [];
  public service: any = [];
  public insurance: any = [];
  public technical: any = [];
  public user: User;
  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly requestService: RequestService,
    private readonly serviceService: ServicesService,
    private readonly costumerService: CostumerService,
    private readonly technicalService: TechnicalService,
    private readonly encryptService: EncryptService,
    private readonly insuranceService: InsuranceService
  ) {
    this.user = new User();
  }



  ngOnInit() {
    this.initializeList();
    this.user = this.encryptService.getValue();
    this.formGroupUser = this.formBuilder.group({
      valueMaterials: ['', Validators.required],
      valueAsistimos: ['', Validators.required],
      valueCostumer: ['', Validators.required],
      reference: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      department: ['', Validators.required],
      state: ['', Validators.required],
      costumer: ['', Validators.required],
      service: ['', Validators.required],
      technical: ['', Validators.required],
      insurance: ['', Validators.required],
      commentary: ['', Validators.required],
      workforce: ['', Validators.required],
      bill: ['', Validators.required],
      materials: ['', Validators.required],
      economicMovement: ['', Validators.required],
    });
  }

  public async initializeList() {
    this.getService();
    this.getTechnical();
    this.getCustomer();
    this.getInsurance();
  }

  public async getService() {
    this.serviceService.getService().subscribe(
      res => {
        this.service = res.services;
      }, errror => {
      });
  }

  public async getCustomer() {
    this.costumerService.getCostumer().subscribe(
      res => {
        this.costumers = res.costumers;
      }, errror => {
      });
  }
  public async getTechnical() {
    this.technicalService.getTechnical().subscribe(
      res => {
        this.technical = res.technical;
      }, errror => {
      });
  }
  public async getInsurance() {
    this.insuranceService.getInsurance().subscribe(
      res => {
        this.insurance = res.insurance;
      }, err => {
      });
  }


  captureInformation() {
    const insurance = this.insurance.filter(x => x._id === this.formGroupUser.value.insurance);
    const service = this.service.filter(x => x._id === this.formGroupUser.value.service);
    const technical = this.technical.filter(x => x._id === this.formGroupUser.value.technical);
    const costumer = this.costumers.filter(x => x._id === this.formGroupUser.value.costumer);

    const data = {
      valueMaterials: this.formGroupUser.value.valueMaterials,
      valueAsistimos: this.formGroupUser.value.valueAsistimos,
      valueCostumer: this.formGroupUser.value.valueCostumer,
      assistance: this.formGroupUser.value.reference,
      phone: this.formGroupUser.value.phone,
      address: this.formGroupUser.value.address,
      city: this.formGroupUser.value.city,
      department: this.formGroupUser.value.department,
      state: this.formGroupUser.value.state,
      costumer: this.formGroupUser.value.costumer,
      service: this.formGroupUser.value.service,
      technical: this.formGroupUser.value.technical,
      insurance: this.formGroupUser.value.insurance,
      user: this.user.user._id,
      commentary: this.formGroupUser.value.commentary,
      nameCostumer: costumer[0].nameCostumer,
      nameService: service[0].nameService,
      nameTechnical: technical[0].nameTechnical,
      nameInsurance: insurance[0].nameInsurance,
      lastnameTechnical: technical[0].lastNameTechnical,
      workforce: this.formGroupUser.value.workforce,
      bill: this.formGroupUser.value.bill,
      materials: this.formGroupUser.value.materials,
      economicMovement: this.formGroupUser.value.economicMovement,
    };
    this.agregar(data);
  }

  agregar(data) {
    this.requestService.postRequest(data).subscribe(
      res => {
        if (res.ok) {
          this.generalService.abrirMensaje('Agregado Correctamente', 'success');
          this.router.navigate(['/request']);
        } else {
          this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        }
      }, err => {
        this.generalService.abrirMensaje('Error de Servidor', 'error');
      });

  }

}
