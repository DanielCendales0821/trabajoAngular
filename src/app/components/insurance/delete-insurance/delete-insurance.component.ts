import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InsuranceService } from 'src/app/services/insuranceService';

@Component({
  selector: 'app-delete-insurance',
  templateUrl: './delete-insurance.component.html',
  styleUrls: ['./delete-insurance.component.scss']
})
export class DeleteInsuranceComponent implements OnInit {

  public idInsurance: any;
  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly insuranceService: InsuranceService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.idInsurance = params['id']);
  }

  eliminar() {
    this.generalService.abrirConfirmacion().subscribe(
      response => {
        this.insuranceService.deleteInsurance(this.idInsurance).subscribe(
          res => {
            this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
            this.router.navigate(['/insurance']);
          },
          error => {
          }
        );
      }, err => {
        this.generalService.abrirMensaje('Verificar información', 'error');
      });
  }

}
