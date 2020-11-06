import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TechnicalService } from 'src/app/services/techicalService';

@Component({
  selector: 'app-delete-technical',
  templateUrl: './delete-technical.component.html',
  styleUrls: ['./delete-technical.component.scss']
})
export class DeleteTechnicalComponent implements OnInit {
  public idTechnical: any;
  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly technicalService: TechnicalService
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => this.idTechnical = params['id']);
  }

  eliminar() {
    this.generalService.abrirConfirmacion().subscribe(
      response => {
        this.technicalService.deleteTechnical(this.idTechnical).subscribe(
          res => {
            this.generalService.abrirMensaje('Se ha eliminado correctamente', 'success');
            this.router.navigate(['/technical']);
          },
          error => {
          }
        );
      }, err => {
        this.generalService.abrirMensaje('Verificar información', 'error');
      });
  }

}
