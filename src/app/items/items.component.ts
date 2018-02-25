import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AppService } from '../appService';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnChanges {
	constructor(private appService: AppService) { }
  @Input()
  items =[];
  @Input()
  userName = '';
  errors;

  ngOnInit() {
  }

  ngOnChanges(changes:  SimpleChanges){
  	if(changes['items']){
  		console.log("From OnChanges")
  		Array.from(this.items).map(x => console.log("names: "+x.name+" Votes: "+x.votes))
  	}

  }
  loadItems() {
  	console.log("Items Loaded")
    this.appService.getItems().subscribe(data => this.items = data);
    Array.from(this.items).map(x => console.log("names: "+x.name+" Votes: "+x.votes))
  }

  sendVote(item){
   console.log("Sending a vote for item: "+item.name);
   this.appService.addVote(this.userName,item.name).subscribe(data => {
   																console.log("Post Rsponse: "+data)},
   																(err) => {this.errors = err._body; 
   																console.log(err._body)}	);
   setTimeout(()=>{ this.loadItems() }, 500)
   
  }


}
