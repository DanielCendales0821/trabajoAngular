import { Component, OnInit } from '@angular/core';
import { TechnicalService } from 'src/app/services/techicalService';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class TechnicalComponent implements OnInit {

  public technical: any = [];
  public idTechnical: any;
  constructor(private readonly technicalService: TechnicalService) { }


  ngOnInit() {
    this.getTechnical();
  }

  getTechnical() {
    this.technicalService.getTechnical().subscribe(
      res => {
        this.technical = res.technical;
      }, errror => {
      });
  }

  leftClick(id) {
    this.idTechnical = id;
  }
}
