import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  constructor (
    private http: Http
  ) {}

  getUsers() {
    return this.http.get(`http://hidden-chamber-59565.herokuapp.com/voter/listVoters`)
    .map((res:Response) => res.json());
  }
  createUser(){
    return this.http.get(`http://hidden-chamber-59565.herokuapp.com/voter/listVoters`)
    .map((res:Response) => res.json());
  }

}
