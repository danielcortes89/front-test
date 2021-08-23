import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})

export class JobService {
    private apiServerUrl = '';

    constructor(private http: HttpClient) { }

    public getAllJobs(): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/jobs`)
    }
}