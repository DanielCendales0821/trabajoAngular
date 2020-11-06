import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/services/insuranceService';
import { RequestService } from 'src/app/services/requestService';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  public request: any = [];
  public exportararchivo: any = [];
  public comentary: any = [];
  public idRequest: any = [];
  public tittle: any;
  constructor(private readonly requestService: RequestService,
    private readonly generalService: GeneralService) { }

  ngOnInit() {
    this.getInsurance();
  }

  getInsurance() {
    this.requestService.getRequest().subscribe(
      res => {
        this.request = res.request;
      }, err => {
      });
  }

  leftClick(id) {
    this.idRequest = id;
  }


  exportar() {
    this.request.forEach(element => {
      const data = {
        'Dirección': element.address,
        'Ciudad': element.city,
        'Departamento': element.department,
        'Fecha Creación': element.created,
        'Telefono': element.phone,
        'Referencia': element.reference,
        'Servicio': element.service,
        'Seguro': element.nameInsurance,
        'Nombre Tecnico': element.technical,
        'Apellido Tecnico': element.technical,
        'Cliente': element.costumer,
        'Valor ServiAssitimos': element.valueAsistimos,
        'Valor Cliente': element.valueCostumer,
        'Valor Materiales': element.valueMaterials,
        'Valor Mano de Obra': element.workforce,
        'Factura': element.bill,
        'Materiales': element.materials,
        'Usuario Creación': element.user.name + '-' + element.user.lastName
      };
      this.exportararchivo.push(data);
    });
    this.generalService.exportAsExcelFile(this.exportararchivo, 'Requerimiento');

  }

  modalComentario(com, nombre) {
    this.tittle = nombre;
    this.comentary = com;
  }

}
