import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Job } from './job'
import { JobService } from './job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public jobs: Job[];

  constructor(private jobService: JobService){}

  ngOnInit(){
    this.getJobs()
  }

  public getJobs(): void {
    this.jobService.getAllJobs().subscribe(
      (response: Job[]) => {
        this.jobs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
}
