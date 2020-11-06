import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';
import { BaseService } from './baseService';
import { EncryptService } from './encrypt.service';

@Injectable({
    providedIn: 'root'
})
export class ServicesService extends BaseService {
    public url: string;

    constructor(
        public readonly http: HttpClient,
    ) {
        super(http);
        this.url = 'url';
    }

    postService(service): any {
        return this.post('service/createService', service);
    }
    updateService(service, id): any {
        return this.update('service/updateService/', id, service);
    }
    getService(): any {
        return this.get('service/services');
    }
    getServiceById(id): any {
        return this.getById('service/service/', id);
    }

    deleteService(id): any {
        return this.delete('service/deleteService/', id);
    }


}
