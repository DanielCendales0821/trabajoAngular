import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';
import { BaseService } from './baseService';
import { EncryptService } from './encrypt.service';

@Injectable({
    providedIn: 'root'
})
export class CostumerService extends BaseService {
    public url: string;

    constructor(
        public readonly http: HttpClient,
    ) {
        super(http);
        this.url = 'url';
    }

    postCostumer(customer): any {
        return this.post('costumer/createCostumer', customer);
    }
    updateCostumer(customer, id): any {
        return this.update('costumer/updateCostumer/', id, customer);
    }
    getCostumer(): any {
        return this.get('costumer/costumers');
    }
    getCostumerById(id): any {
        return this.getById('costumer/costumer/', id);
    }

    deleteCustomer(id): any {
        return this.delete('costumer/deleteCostumer/', id);
    }


}
