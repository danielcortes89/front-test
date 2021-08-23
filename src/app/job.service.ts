// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class JobService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Job } from './job'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class JobService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getAllJobs(): Observable<Job[]> {
        return this.http.get<any>(`${this.apiServerUrl}/jobs`)
    }

    public addJob(job: Job): Observable<Job> {
        return this.http.post<Job>(`${this.apiServerUrl}/addJob`, job)
    }

    public getJobById(jobId: number): Observable<Job> {
        return this.http.get<Job>(`${this.apiServerUrl}/find/${jobId}`)
    }
}