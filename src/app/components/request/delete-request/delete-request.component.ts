import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/requestService';

@Component({
  selector: 'app-delete-request',
  templateUrl: './delete-request.component.html',
  styleUrls: ['./delete-request.component.scss']
})
export class DeleteRequestComponent implements OnInit {
  public idRequest: any;
  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly requestService: RequestService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.idRequest = params['id']);
  }

  eliminar() {
    this.generalService.abrirConfirmacion().subscribe(
      response => {
        this.requestService.deleteRequest(this.idRequest).subscribe(
          res => {
            this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
            this.router.navigate(['/request']);
          },
          error => {
          }
        );
      }, err => {
        this.generalService.abrirMensaje('Verificar información', 'error');
      });
  }
}
