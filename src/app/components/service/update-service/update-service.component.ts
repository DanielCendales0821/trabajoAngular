import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/servicesService';
import { EncryptService } from 'src/app/services/encrypt.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.scss']
})
export class UpdateServiceComponent implements OnInit {

  public formGroupUser: FormGroup;
  public idUser: any;
  public idService: any;
  public service: any;

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private readonly servicesService: ServicesService,
    private readonly encryptService: EncryptService
  ) {
    this.service = new Object();
  }



  ngOnInit() {
    this.route.params.subscribe(params => this.idService = params['id']);
    this.idUser = this.encryptService.getValue();
    this.formGroupUser = this.formBuilder.group({
      commentary: ['', Validators.required],
      nameService: ['', Validators.required],
    });
    this.getServiceById();
  }

  public async getServiceById() {
    this.servicesService.getServiceById(this.idService).subscribe(
      res => {
        this.service = res.service;
      }, err => { });
  }



  captureInformation() {
    const data = {
      commentary: this.formGroupUser.value.commentary,
      nameService: this.formGroupUser.value.nameService,
      user: this.idUser.user._id
    };
    this.updateService(data);
  }

  updateService(data) {
    this.servicesService.updateService(data, this.idService).subscribe(
      res => {
        this.generalService.abrirMensaje('Actualizado Correctamente', 'success');
        this.router.navigate(['/service']);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }

}
