import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  constructor (
    private http: Http
  ) {}

  data={};

  getUsers() {
    return this.http.get(`http://hidden-chamber-59565.herokuapp.com/voter/listVoters`)
    .map((res:Response) => res.json());
  }
  addVote(userName, data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = "http://hidden-chamber-59565.herokuapp.com/voter/"+userName+"/vote"
    let postData = {name:String};
    postData.name=data;

    return this.http.post(url, postData, options)
               .map(this.extractData)
}
extractData(res: Response) {
  let body = res.json()
  return body || {};
}

getItems() {
  return this.http.get(`http://hidden-chamber-59565.herokuapp.com/item/listItems`)
  .map((res:Response) => res.json());
}

}
