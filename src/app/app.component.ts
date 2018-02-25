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
  items = [];
  postRes={};
  constructor(private appService: AppService) { }

  usrNameAction(){
    this.loadItems();
    this.showForm = false;
    this.showData = true;
  }

  loadItems() {
    this.appService.getItems().subscribe(data => this.items = data);
    console.log("items"+ this.items.toString());
  }

  sendVote(item){
   this.appService.addVote(this.usrName,item.name).subscribe(data => this.postRes = data);
   this.loadItems();
  }

  userChangeAction(){

    this.showForm = true;
    this.showData = false;
    console.log("UserName = "+this.usrName);
    this.loadItems();
  }
}
