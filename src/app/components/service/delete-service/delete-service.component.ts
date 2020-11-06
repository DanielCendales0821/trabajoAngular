import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/servicesService';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.scss']
})
export class DeleteServiceComponent implements OnInit {

  public idService: any;
  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly serviceService: ServicesService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.idService = params['id']);
  }

  eliminar() {
    this.generalService.abrirConfirmacion().subscribe(
      response => {
        this.serviceService.deleteService(this.idService).subscribe(
          res => {
            this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
            this.router.navigate(['/service']);
          },
          error => {
          }
        );
      }, err => {
        this.generalService.abrirMensaje('Verificar información', 'error');
      });
  }

}
