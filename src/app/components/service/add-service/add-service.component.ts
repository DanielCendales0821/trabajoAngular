import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CostumerService } from 'src/app/services/costumerService';
import { ServicesService } from 'src/app/services/servicesService';
import { EncryptService } from 'src/app/services/encrypt.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  public formGroupUser: FormGroup;
  public idUser: any;

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly servicesService: ServicesService,
    private readonly encryptService: EncryptService
  ) { }



  ngOnInit() {
    this.idUser = this.encryptService.getValue();
    this.formGroupUser = this.formBuilder.group({
      commentary: ['', Validators.required],
      nameService: ['', Validators.required],
    });
  }



  captureInformation() {
    const data = {
      commentary: this.formGroupUser.value.commentary,
      nameService: this.formGroupUser.value.nameService,
      user: this.idUser.user._id
    };
    this.addCostumer(data);
  }

  addCostumer(data) {
    this.servicesService.postService(data).subscribe(
      res => {
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
        this.router.navigate(['/service']);
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }

}
