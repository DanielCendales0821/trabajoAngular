import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CostumerService } from 'src/app/services/costumerService';

@Component({
  selector: 'app-update-costumer',
  templateUrl: './update-costumer.component.html',
  styleUrls: ['./update-costumer.component.scss']
})
export class UpdateCostumerComponent implements OnInit {

  public formGroupUser: FormGroup;
  public idCustomer: any;
  public customer: any;

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly costumerService: CostumerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.customer = new Object();
  }



  ngOnInit() {
    this.route.params.subscribe(params => this.idCustomer = params['id']);
    this.formGroupUser = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      department: ['', Validators.required],
    });
    this.getCustomerById();
  }

  public async getCustomerById() {
    this.costumerService.getCostumerById(this.idCustomer).subscribe(
      res => {
        this.customer = res.costumer;
      }, err => { });
  }



  captureInformation() {
    const data = {
      nameCostumer: this.formGroupUser.value.name,
      phone: this.formGroupUser.value.phone,
      address: this.formGroupUser.value.address,
      city: this.formGroupUser.value.city,
      department: this.formGroupUser.value.department,
    };
    this.updateCostumer(data);
  }

  updateCostumer(data) {
    this.costumerService.updateCostumer(data, this.idCustomer).subscribe(
      res => {
        if (res.ok) {
          this.generalService.abrirMensaje('Actualizado Correctamente', 'success');
          this.router.navigate(['/costumer']);
        } else {
          this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        }
      }, err => {
        this.generalService.abrirMensaje('Error de Servidor', 'error');
      });

  }

}
