import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private pathUsers = 'https://api.github.com/users?since='
  private pathDetails = 'http://localhost:8000/api/users/'

  constructor(private http: HttpClient) { }

  listUsers(user_id: any) {
    return this.http.get(`${this.pathUsers}${user_id}`).pipe(map(res => res));
  }
  userDetails(user_login: any) {
    return this.http.get(`${this.pathDetails}${user_login}/details`).pipe(map(res => res));
  }
  userRepos(user_login: any) {
    return this.http.get(`${this.pathDetails}${user_login}/repos`).pipe(map(res => res));
  }
}
