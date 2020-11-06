import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CostumerService } from 'src/app/services/costumerService';

@Component({
  selector: 'app-delete-costumer',
  templateUrl: './delete-costumer.component.html',
  styleUrls: ['./delete-costumer.component.scss']
})
export class DeleteCostumerComponent implements OnInit {
  public idCustomer: any;
  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly costumerService: CostumerService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.idCustomer = params['id']);
  }

  eliminar() {
    this.generalService.abrirConfirmacion().subscribe(
      response => {
        this.costumerService.deleteCustomer(this.idCustomer).subscribe(
          res => {
            this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
            this.router.navigate(['/costumer']);
          },
          error => {
          }
        );
      }, err => {
        this.generalService.abrirMensaje('Verificar información', 'error');
      });
  }
}
