import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {


  details: any;
  repos: any;
  show = false;

  constructor(private service: AppServiceService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(){
    let username = this.route.snapshot.queryParamMap.get('userLogin');
    this.getDetails(username);
  }

  getDetails(username: any){
    this.service.userDetails(username).subscribe(
      (res => {
        console.log(res);
        this.details = res;
      })
    );
  }
  getRepos(username: any){
    this.service.userRepos(username).subscribe(
      (res => {
        console.log(res);
        this.repos = res;
        this.show = true;
      })
    );
  }
}
