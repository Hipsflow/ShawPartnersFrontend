import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {

  userLogin = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  users: any;

  constructor(private service: AppServiceService,
    private router: Router) { }

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    var user_id = 0;
    this.service.listUsers(user_id).subscribe(
      (res => {
        console.log(res);
        this.users = res;
      })
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getUsers();
  }
  showDetails(userLogin: any) {
    console.log(userLogin);
    let userName = {
      userLogin : userLogin
    }
    const url = this.router.createUrlTree(['/user-details'], {queryParams: userName})
    window.open(url.toString(),)
  }
}
