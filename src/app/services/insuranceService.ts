import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';
import { BaseService } from './baseService';
import { EncryptService } from './encrypt.service';

@Injectable({
    providedIn: 'root'
})
export class InsuranceService extends BaseService {
    public url: string;

    constructor(
        public readonly http: HttpClient,
    ) {
        super(http);
        this.url = 'url';
    }

    postInsurance(insurance): any {
        return this.post('insurance/createInsurance', insurance);
    }
    updateInsurance(insurance, id): any {
        return this.update('insurance/updateInsurance/', id, insurance);
    }
    getInsurance(): any {
        return this.get('insurance/insurances');
    }
    getInsuranceById(id): any {
        return this.getById('insurance/insurance/', id);
    }

    deleteInsurance(id): any {
        return this.delete('insurance/deleteInsurance/', id);
    }


}
