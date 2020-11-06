import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BaseService } from './baseService';

@Injectable({
    providedIn: 'root'
})
export class TechnicalService extends BaseService {
    public url: string;

    constructor(
        public readonly http: HttpClient,
    ) {
        super(http);
        this.url = 'url';
    }

    postTechnical(customer): any {
        return this.post('technical/createTechnical', customer);
    }
    updateTechnical(customer, id): any {
        return this.update('technical/updateTechnical/', id, customer);
    }
    getTechnical(): any {
        return this.get('technical/technicals');
    }
    getTechnicalById(id): any {
        return this.getById('technical/technical/', id);
    }

    deleteTechnical(id): any {
        return this.delete('technical/deleteTechnical/', id);
    }


}
