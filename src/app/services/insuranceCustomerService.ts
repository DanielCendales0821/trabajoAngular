import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';
import { BaseService } from './baseService';
import { EncryptService } from './encrypt.service';

@Injectable({
    providedIn: 'root'
})
export class InsuranceCustomerService extends BaseService {
    public url: string;

    constructor(
        public readonly http: HttpClient,
    ) {
        super(http);
        this.url = 'url';
    }

    postInsuranceCustomer(insuranceCostumer): any {
        return this.post('insuranceCostumer/createInsuranceCostumer', insuranceCostumer);
    }
    updateInsuranceCustomer(insuranceCostumer, id): any {
        return this.update('insuranceCostumer/updateInsuranceCostumer/', id, insuranceCostumer);
    }
    getInsuranceCustomer(): any {
        return this.get('insuranceCostumer/insurancesCostumers');
    }
    getInsuranceCustomerById(id): any {
        return this.getById('insuranceCostumer/insuranceCostumer/', id);
    }

    deleteInsuranceCustomer(id): any {
        return this.delete('insuranceCostumer/deleteInsuranceCostumer/', id);
    }


}
