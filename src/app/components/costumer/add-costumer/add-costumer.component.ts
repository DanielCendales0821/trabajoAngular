import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CostumerService } from 'src/app/services/costumerService';

@Component({
  selector: 'app-add-costumer',
  templateUrl: './add-costumer.component.html',
  styleUrls: ['./add-costumer.component.scss']
})
export class AddCostumerComponent implements OnInit {

  public formGroupUser: FormGroup;

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly costumerService: CostumerService
  ) { }



  ngOnInit() {
    this.formGroupUser = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      department: ['', Validators.required],
    });
  }



  captureInformation() {
    const data = {
      nameCostumer: this.formGroupUser.value.name,
      phone: this.formGroupUser.value.phone,
      address: this.formGroupUser.value.address,
      city: this.formGroupUser.value.city,
      department: this.formGroupUser.value.department,
    };
    this.addCostumer(data);
  }

  addCostumer(data) {
    this.costumerService.postCostumer(data).subscribe(
      res => {
        if (res.ok) {
          this.generalService.abrirMensaje('Agregado Correctamente', 'success');
          this.router.navigate(['/costumer']);
        } else {
          this.generalService.abrirMensaje('Ocurrio un Error', 'error');
        }
      }, err => {
        this.generalService.abrirMensaje('Error de Servidor', 'error');
      });
  }


}
