import { Component, OnInit } from '@angular/core';
import { CostumerService } from 'src/app/services/costumerService';

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.scss']
})
export class CostumerComponent implements OnInit {
  public costumers: any = [];
  public idCustomer: number;
  constructor(private readonly costumerService: CostumerService) { }


  ngOnInit() {
    this.getCustomer();
  }

  getCustomer() {
    this.costumerService.getCostumer().subscribe(
      res => {
        this.costumers = res.costumers;
      }, errror => {
      });
  }

  leftClick(id) {
    this.idCustomer = id;
  }

}
