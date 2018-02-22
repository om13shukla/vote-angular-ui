import { Component } from '@angular/core';
import { Item } from './item';
import { User } from './user';
import { AppService } from './appService';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  usrName = '';
  token = 0;
  showForm = true;
  showData = false;
  name = "Vishwa";
  votes =20;
  user = {};
  items:Item[];
  constructor(private appService: AppService) { }

  usrNameAction(){
    console.log("UserName = "+this.usrName)
    this.showForm = false;
    this.showData = true;
  }
  loadUser() {
    this.appService.getUsers().subscribe(data => this.user = data);
  }

}
