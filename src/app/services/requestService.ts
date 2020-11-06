import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './baseService';


@Injectable({
    providedIn: 'root'
})
export class RequestService extends BaseService {
    public url: string;

    constructor(
        public readonly http: HttpClient,
    ) {
        super(http);
        this.url = 'url';
    }

    postRequest(request): any {
        return this.post('request/createRequest', request);
    }
    updateRequest(request, id): any {
        return this.update('request/updateRequest/', id, request);
    }
    getRequest(): any {
        return this.get('request/getRequests');
    }
    getRequestById(id): any {
        return this.getById('request/request/', id);
    }

    deleteRequest(id): any {
        return this.delete('request/deleteRequest/', id);
    }

    addCommentary(data): any {
        return this.post('requestCommentary/createRequestCommentary/', data);
    }


}
